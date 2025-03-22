import css from './adminPositions.module.css';

import { getAllCategories } from 'service/getCategories';
import CategoriesList from 'components/CategoriesList/CategoriesList';
import { useEffect, useState } from 'react';
import { getCarsByCategoryId } from 'service/getCarsByCategoryId';

const AdminPositions = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentCarsList, setCurrentCarsList] = useState([]);
  const [selectedCarId, setSelectedCarId] = useState(null);
  const [editableCar, setEditableCar] = useState(null);
  const [newPhotoUrl, setNewPhotoUrl] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategories();
        setCategories(response);
        if (response.length > 0) {
          setActiveCategory(response[0]);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (!activeCategory) return;

    const fetchCars = async () => {
      try {
        const carsList = await getCarsByCategoryId(activeCategory.id);
        setCurrentCarsList(carsList);

        if (carsList.length > 0 && carsList[0].cars.length > 0) {
          setSelectedCarId(carsList[0].cars[0].id);
          setEditableCar({ ...carsList[0].cars[0] });
        }
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, [activeCategory]);

  const handleCategoryClick = category => {
    setActiveCategory(category);
  };

  const handleCarClick = carId => {
    setSelectedCarId(carId);
    const car = currentCarsList[0].cars.find(car => car.id === carId);
    setEditableCar({ ...car });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setEditableCar(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    const updatedCategories = categories.map(category => {
      if (category.id === activeCategory.id) {
        return {
          ...category,
          cars: category.cars.map(car =>
            car.id === editableCar.id ? { ...editableCar } : car
          ),
        };
      }
      return category;
    });

    setCategories(updatedCategories);
  };

  const handleAddPhoto = () => {
    if (newPhotoUrl.trim() !== '') {
      setEditableCar(prev => ({
        ...prev,
        photos: [...prev.photos, newPhotoUrl],
      }));
      setNewPhotoUrl('');
    }
  };

  const handleDeletePhoto = index => {
    setEditableCar(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  };

  const handleDeleteCar = () => {
    setCurrentCarsList(prevList =>
      prevList.map(category =>
        category.id === activeCategory.id
          ? {
              ...category,
              cars: category.cars.filter(car => car.id !== selectedCarId),
            }
          : category
      )
    );
    setEditableCar(null);
    setSelectedCarId(null);
  };

  return (
    <div className={css.section}>
      <div className={css.container}>
        <h1 style={{ marginBottom: '20px' }}>Positions</h1>

        <CategoriesList
          categories={categories}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />

        <div className={css.editorWrapper}>
          <div className={css.editorListWrapper}>
            <ul className={css.editorList}>
              {currentCarsList.length > 0 &&
              currentCarsList[0].cars.length > 0 ? (
                currentCarsList[0].cars.map(car => (
                  <li
                    className={`${css.editorListItem} ${
                      car.id === selectedCarId ? css.active : ''
                    }`}
                    key={car.id}
                  >
                    <button
                      className={css.editorListItemButton}
                      onClick={() => handleCarClick(car.id)}
                    >
                      <p>{car.brand}</p>
                      <p>{car.model}</p>
                    </button>
                  </li>
                ))
              ) : (
                <p>No cars available</p>
              )}
            </ul>
            <button className={css.newCarButton}>
              <p>Add new car</p>
            </button>
          </div>

          {editableCar && (
            <div className={css.editorForm}>
              <h2 className={css.formTitle}>Edit Car</h2>
              <div className={css.formGroup}>
                {Object.keys(editableCar).map(key => {
                  if (
                    key === 'body_type' ||
                    key === 'drive_type' ||
                    key === 'fuel_type' ||
                    key === 'transmission_type'
                  ) {
                    const options = {
                      body_type: [
                        'Coupe',
                        'Convertible',
                        'Sedan',
                        'Station Wagon',
                        'SUV',
                        'Pickup Truck',
                      ],
                      drive_type: ['AWD', 'FWD', 'RWD'],
                      fuel_type: ['Petrol', 'Diesel', 'Electric'],
                      transmission_type: ['Automatic', 'Manual'],
                    };
                    return (
                      <label key={key} className={css.formLabel}>
                        {key.replace(/_/g, ' ')}:
                        <select
                          name={key}
                          value={editableCar[key]}
                          onChange={handleInputChange}
                          className={css.formInput}
                        >
                          {options[key].map(option => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </label>
                    );
                  } else if (key !== 'id' && key !== 'photos') {
                    return (
                      <label key={key} className={css.formLabel}>
                        {key.replace(/_/g, ' ')}:
                        <input
                          type="text"
                          name={key}
                          value={editableCar[key]}
                          onChange={handleInputChange}
                          className={css.formInput}
                        />
                      </label>
                    );
                  }
                  return null;
                })}
              </div>
              <div>
                <h3>Photos</h3>
                <div className={css.photoList}>
                  {editableCar.photos.map((photo, index) => (
                    <div key={index} className={css.photoItem}>
                      <img
                        src={photo}
                        alt={`Car ${index}`}
                        className={css.photoPreview}
                      />
                      <button
                        onClick={() => handleDeletePhoto(index)}
                        className={css.deletePhotoButton}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
                <input
                  type="text"
                  value={newPhotoUrl}
                  onChange={e => setNewPhotoUrl(e.target.value)}
                />
                <button onClick={handleAddPhoto}>Add Photo</button>
              </div>

              <div className={css.buttonGroup}>
                <button onClick={handleSaveChanges} className={css.saveButton}>
                  Save
                </button>
                <button onClick={handleDeleteCar} className={css.deleteButton}>
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPositions;

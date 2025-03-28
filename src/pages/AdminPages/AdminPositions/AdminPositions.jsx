import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import css from './adminPositions.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleInputPhoto = e => {
    const url = e.target.value;
    setNewPhotoUrl(url);

    // Перевірка, чи посилання починається з https://i.ibb.co
    if (!url.startsWith('https://i.ibb.co')) {
      setError('Посилання повинно починатися з https://i.ibb.co');
    } else {
      setError('');
    }
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
    setIsModalOpen(false);
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
              <div>
                <div className={css.photosWrapper}>
                  <div className={css.photoList}>
                    <Swiper
                      pagination={{
                        type: 'fraction',
                      }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className={css.swiper}
                    >
                      {editableCar.photos.map((photo, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={photo}
                            alt={`Car ${index}`}
                            className={css.photoPreview}
                          />
                          <button
                            onClick={() => handleDeletePhoto(index)}
                            className={css.deletePhotoButton}
                          >
                            Delete photo
                          </button>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className={css.addPhotoWrapper}>
                    <p>Enter direct link from IMGbb for add new photo</p>
                    <input
                      type="text"
                      value={newPhotoUrl}
                      className="newPhotoInput"
                      onChange={handleInputPhoto}
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button onClick={handleAddPhoto}>Add Photo</button>
                  </div>
                </div>
              </div>
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

              <div className={css.buttonGroup}>
                <button onClick={handleSaveChanges} className={css.saveButton}>
                  Save
                </button>
                <button
                  className={css.deleteButton}
                  onClick={() => setIsModalOpen(true)}
                >
                  Delete Car
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '9999999999',
          }}
        >
          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this car?</p>
            <button
              onClick={() => setIsModalOpen(false)}
              style={{ marginRight: '10px' }}
            >
              Cancel
            </button>
            <button
              onClick={handleDeleteCar}
              style={{ background: 'red', color: 'white' }}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPositions;

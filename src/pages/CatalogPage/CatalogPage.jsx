import { useEffect, useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { getCarsByCategoryId } from 'service/getCarsByCategoryId';

const CatalogPage = () => {
  const { id } = useParams(); // id з URL
  const navigate = useNavigate(); // Хук для перенаправлення
  const [carsListData, setCarsListData] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      if (!id) return; // Перевіряємо наявність id
      try {
        const response = await getCarsByCategoryId(id);
        setCarsListData(response);
      } catch (error) {
        console.error('Error fetching cars by category:', error);
      }
    };

    fetchCars();
  }, [id]);

  const handleBtn = newId => {
    navigate(`/catalog/${newId}`); // Перенаправляємо на нову категорію
  };

  // Якщо `id` відсутній, повертаємо `Navigate` в самому JSX
  if (!id) {
    return <Navigate to="/catalog/1" replace />;
  }

  console.log(carsListData);

  return (
    <div style={{ paddingTop: '200px' }}>
      <h1>CATEGORY - {id}</h1>
      <button type="button" onClick={() => handleBtn(1)}>
        1
      </button>
      <button type="button" onClick={() => handleBtn(2)}>
        2
      </button>
      <div>
        {carsListData ? (
          <ul>
            {carsListData.map(car => (
              <li key={car.id}>{car.name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading cars...</p>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;

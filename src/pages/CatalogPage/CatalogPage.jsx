import { Container } from 'components/Base/Container/Container';
import { Section } from 'components/Base/Section/Section';
import CarCard from 'components/CarCard/CarCard';
import CategoriesList from 'components/CategoriesList/CategoriesList';
import { useEffect, useState } from 'react';
import {
  useParams,
  useNavigate,
  Navigate,
  useLocation,
} from 'react-router-dom';

import { getCarsByCategoryId } from 'service/getCarsByCategoryId';
import { getAllCategories } from 'service/getCategories';

import css from './catalogPage.module.css';

const CatalogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [categories, setCategories] = useState(
    location.state?.categories || []
  );
  const [activeCategory, setActiveCategory] = useState(null);
  const [carsListData, setCarsListData] = useState(null);
  const [carsCache, setCarsCache] = useState({}); // Об'єкт для кешу даних про авто

  // Завантаження авто
  useEffect(() => {
    if (!id) return;

    if (!categories.length) {
      const fetchCategories = async () => {
        try {
          const response = await getAllCategories();
          console.log(response);
          setCategories(response);
          const active = response.find(category => category.id === Number(id));
          setActiveCategory(active || categories[0]); // Не використовуємо `categories[0]` за замовчуванням
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
      fetchCategories();
    } else {
      const active = categories.find(category => category.id === Number(id));
      setActiveCategory(active || categories[0]); // Не використовуємо `categories[0]` за замовчуванням
    }

    // Якщо дані для категорії є в кеші, використовуємо їх
    if (carsCache[id]) {
      setCarsListData(carsCache[id]);
      return;
    }

    // Інакше виконуємо запит
    const fetchCars = async () => {
      try {
        const response = await getCarsByCategoryId(id);
        const cars = response[0]?.cars || [];
        setCarsListData(cars);

        // Додаємо в кеш
        setCarsCache(prevCache => ({ ...prevCache, [id]: cars }));
      } catch (error) {
        console.error('Error fetching cars by category:', error);
      }
    };
    fetchCars();
  }, [id]);

  const handleBtn = newId => {
    navigate(`/catalog/${newId}`, { state: { categories } });
  };

  if (!id && categories.length) {
    return <Navigate to={`/catalog/${categories[0].id}`} replace />;
  }

  return (
    <Section>
      <Container>
        <div style={{ paddingTop: '200px' }}>
          <CategoriesList
            categories={categories}
            activeCategory={activeCategory}
            onCategoryClick={category =>
              navigate(`/catalog/${category.id}`, { state: { categories } })
            }
          />
          <h1>CATEGORY - {categories[id - 1].name}</h1>

          <div>
            {carsListData ? (
              <ul className={css.carsList}>
                {carsListData.map(car => (
                  <CarCard car={car} />
                ))}
              </ul>
            ) : (
              <p>Loading cars...</p>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CatalogPage;

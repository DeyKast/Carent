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
import Filters from 'components/Filters/Filters';

import css from './catalogPage.module.css';

const CatalogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [categories, setCategories] = useState(
    location.state?.categories || []
  );
  const [carsListData, setCarsListData] = useState([]);
  const [carsCache, setCarsCache] = useState({});
  const activeCategory =
    categories.find(category => category.id === id) || null;
  const [filteredCars, setFilteredCars] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    if (!categories.length) {
      const fetchCategories = async () => {
        try {
          const response = await getAllCategories();
          setCategories(response);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
      fetchCategories();
    }

    if (id) {
      if (carsCache[id]) {
        setCarsListData(carsCache[id]);
      } else {
        const fetchCars = async () => {
          try {
            const response = await getCarsByCategoryId(id);
            const cars = response[0]?.cars || [];
            setCarsListData(cars);

            setCarsCache(prevCache => ({ ...prevCache, [id]: cars }));
          } catch (error) {
            console.error('Error fetching cars by category:', error);
          }
        };
        fetchCars();
      }
    }
  }, [id, categories, carsCache]);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = carsListData.filter(car => {
        const {
          priceFrom,
          priceTo,
          driveType,
          transmissionType,
          fuelConsumptionTo,
          bodyType,
        } = filters;
        return (
          (!priceFrom || car.rental_price_per_day >= priceFrom) &&
          (!priceTo || car.rental_price_per_day <= priceTo) &&
          (!driveType || car.drive_type === driveType) &&
          (!transmissionType || car.transmission_type === transmissionType) &&
          (!fuelConsumptionTo ||
            car.fuel_consumption_l_per_100km <= fuelConsumptionTo) &&
          (!bodyType || car.body_type === bodyType)
        );
      });
      setFilteredCars(filtered);
    };
    applyFilters();
  }, [carsListData, filters]);

  const handleFilterChange = updatedFilters => {
    setFilters(updatedFilters);
  };

  if (!id && categories.length) {
    return <Navigate to={`/catalog/${categories[0].id}`} replace />;
  }

  return (
    <Section>
      <Container>
        <div style={{ paddingTop: '150px', minHeight: 'calc(100vh - 100px)' }}>
          <CategoriesList
            categories={categories}
            activeCategory={activeCategory}
            onCategoryClick={category =>
              navigate(`/catalog/${category.id}`, { state: { categories } })
            }
          />
          <Filters onFilterChange={handleFilterChange} />
          <div>
            {filteredCars.length ? (
              <ul className={css.carsList}>
                {filteredCars.map(car => (
                  <CarCard
                    key={car.id}
                    car={car}
                    categoryId={activeCategory.id}
                  />
                ))}
              </ul>
            ) : (
              <p
                style={{
                  fontSize: '36px',
                  textAlign: 'center',
                  marginTop: '100px',
                }}
              >
                Sorry we can't find cars with your criteria
              </p>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CatalogPage;

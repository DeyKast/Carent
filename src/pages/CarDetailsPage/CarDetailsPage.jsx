import { Container } from 'components/Base/Container/Container';
import { Section } from 'components/Base/Section/Section';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import css from './carDetailsPage.module.css';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { BlockLoader } from 'components/BlockLoader/BlockLoader';
import RentalForm from 'components/RentalForm/RentalForm';

const CarDetailsPage = () => {
  const location = useLocation();
  const car = location.state?.car;

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [photos] = useState(car?.photos || []);
  const [loadingStates, setLoadingStates] = useState(
    Array(photos.length).fill(true)
  );
  const [isFormVisible, setFormVisible] = useState(false);

  const handleRentButtonClick = () => {
    setFormVisible(prev => !prev);
  };

  if (!car) {
    return (
      <Section>
        <Container>
          <div className={css.detailsContainer}>
            <h1>Car not found</h1>
            <p>We couldn't retrieve details about this car.</p>
          </div>
        </Container>
      </Section>
    );
  }

  const {
    brand,
    model,
    year,
    passenger_capacity,
    body_type,
    drive_type,
    horsepower,
    max_speed_kmh,
    acceleration_to_100_kmh,
    engine_volume_liters,
    fuel_consumption_l_per_100km,
    rental_price_per_day,
    deposit_price,
    fuel_type,
    transmission_type,
  } = car;

  const handleImageLoad = index => {
    setLoadingStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  };

  return (
    <Section>
      <Container>
        <div className={css.detailsContainer}>
          <div className={css.photosSwiperWrapper}>
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                marginBottom: '10px',
              }}
              className={css.mainSwiper}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
            >
              {photos.length > 0 ? (
                photos.map((photo, index) => (
                  <SwiperSlide key={index}>
                    <div className={css.imageWrapper}>
                      {loadingStates[index] && <BlockLoader />}
                      <img
                        className={css.swiperImage}
                        src={photo}
                        alt={`${model} ${index + 1}`}
                        style={{
                          display: loadingStates[index] ? 'none' : 'block',
                        }}
                        onLoad={() => handleImageLoad(index)}
                      />
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <p>No photos available</p>
              )}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className={css.secondarySwiper}
            >
              {photos.length > 0 ? (
                photos.map((photo, index) => (
                  <SwiperSlide key={index}>
                    <div className={css.imageWrapper}>
                      {loadingStates[index] && <BlockLoader />}
                      <img
                        src={photo}
                        alt={`${model} ${index + 1}`}
                        style={{
                          display: loadingStates[index] ? 'none' : 'block',
                        }}
                        onLoad={() => handleImageLoad(index)}
                      />
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <p>No photos available</p>
              )}
            </Swiper>
          </div>
          <div className={css.carInfoWrapper}>
            <h1 style={{ textAlign: 'start' }}>
              {brand} {model}
            </h1>
            <div style={{ textAlign: 'start' }}>
              <p>Year: {year}</p>
              <p>Body type: {body_type}</p>
              <p>Passenger capacity: {passenger_capacity}</p>
              <p>Transmission: {transmission_type}</p>
              <p>Drive type: {drive_type}</p>
            </div>
            <div className={css.carEngineInfoWrapper}>
              <ul className={css.carEngineInfoList}>
                <li className={css.carEngineInfoListItem}>
                  <p>Engine volume: </p>
                  <p>{engine_volume_liters}L</p>
                </li>
                <li className={css.carEngineInfoListItem}>
                  <p>Fuel Type: </p>
                  <p>{fuel_type}</p>
                </li>
                <li className={css.carEngineInfoListItem}>
                  <p>Fuel Consumption: </p>
                  <p>{fuel_consumption_l_per_100km}L/100km</p>
                </li>
                <li className={css.carEngineInfoListItem}>
                  <p>Horsepowers:</p>
                  <p>{horsepower}hp</p>
                </li>

                <li className={css.carEngineInfoListItem}>
                  <p>Max speed: </p>
                  <p>{max_speed_kmh}km/h</p>
                </li>
                <li className={css.carEngineInfoListItem}>
                  <p>Acceleration to 100km/h: </p>
                  <p>{acceleration_to_100_kmh}sec.</p>
                </li>
              </ul>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                fontWeight: '800',
                fontSize: '18px',
              }}
            >
              <p>Deposit: ${deposit_price}</p>
              <p style={{ textAlign: 'end', fontSize: '22px' }}>
                Rental Price:{' '}
                <span
                  style={{ color: 'var(--accent-color)', fontSize: '24px' }}
                >
                  ${rental_price_per_day}/day
                </span>
              </p>
            </div>
            <button className={css.rentButton} onClick={handleRentButtonClick}>
              Rent now
            </button>
          </div>
        </div>
      </Container>
      {isFormVisible && (
        <RentalForm
          carModel={`${brand} ${model}`}
          onClose={handleRentButtonClick}
        />
      )}
    </Section>
  );
};

export default CarDetailsPage;

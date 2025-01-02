import css from './carCard.module.css';

const CarCard = car => {
  console.log(car.car.photos);
  return (
    <>
      <li className={css.carCard}>
        <div>
          <img src={car.car.photos[0]} alt={car.model} />
        </div>
        <div>
          <p>{car.car.brand} {car.car.model}</p>
          <p></p>
        </div>
      </li>
    </>
  );
};

export default CarCard;

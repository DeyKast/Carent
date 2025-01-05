import { useNavigate } from 'react-router-dom';
import css from './carCard.module.css';

const CarCard = ({ car, categoryId }) => {
  const {
    id,
    photos,
    brand,
    model,
    year,
    fuel_consumption_l_per_100km,
    rental_price_per_day,
    deposit_price,
    fuel_type,
    transmission_type,
  } = car;

  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
    navigate(`/car/${id}`, { state: { car } });
  };

  return (
    <li className={css.carCard}>
      <div>
        <img
          className={css.cardImg}
          src={photos[0]}
          alt={`${brand} ${model}`}
        />
      </div>
      <div className={css.cardInfo}>
        <p className={css.cardModel}>
          {brand} {model}
        </p>
        <div className={css.fuelWrapper}>
          <p>{transmission_type} </p>
          <p>{year}</p>
        </div>

        <div className={css.fuelWrapper}>
          <p>{fuel_type}</p>
          <p>{fuel_consumption_l_per_100km}L/100km</p>
        </div>
        <div className={css.fuelWrapper}>
          <p style={{ fontWeight: '800' }}>Deposit ${deposit_price}</p>
          <p className={css.cardRentalPrice}>${rental_price_per_day}/day</p>
        </div>

        <div className={css.cardButtonsWrapper}>
          <button
            type="button"
            className={css.cardMoreInfoBtn}
            onClick={() => handleSeeMoreClick(id, categoryId)}
          >
            More info
          </button>
        </div>
      </div>
    </li>
  );
};

export default CarCard;

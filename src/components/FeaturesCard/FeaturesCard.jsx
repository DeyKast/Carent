import css from './featuresCard.module.css';

export const FeaturesCard = ({ symbol, number, text }) => {
  return (
    <div className={css.cardWrapper}>
      <p className={css.bigText}>
        <span className={css.accentText}>{symbol}&nbsp;</span>
        {number}
      </p>
      <p className={css.smallText}>{text}</p>
    </div>
  );
};

import css from './sectionTitle.module.css';

export const Title = ({ titleText, margin }) => {
  return (
    <>
      <h1 className={css.title} style={(margin = { margin })}>
        {titleText}
      </h1>
    </>
  );
};

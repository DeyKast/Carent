import React from 'react';
import css from './seeMoreBtn.module.css';

function SeeMoreButton({ id, onSeeMoreClick }) {
  const handleClick = () => {
    if (onSeeMoreClick) {
      onSeeMoreClick(id);
    }
  };

  return (
    <button className={css.seeMoreButton} onClick={handleClick}>
      SEE MORE
    </button>
  );
}

export default SeeMoreButton;

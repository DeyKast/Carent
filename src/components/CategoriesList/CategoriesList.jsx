import React from 'react';
import icons from '../../img/sprite.svg';

import css from './categoriesList.module.css';

const CategoriesList = ({ categories, activeCategory, onCategoryClick }) => {
  return (
    <div className={css.categories}>
      {categories.map(category => (
        <button
          key={category.id}
          className={`${css['category-button']} ${
            category.id === activeCategory?.id ? css.active : ''
          }`}
          onClick={() => onCategoryClick(category)}
        >
          <svg className={css['category-icon']}>
            <use xlinkHref={`${icons}#icon-${category.name.toLowerCase()}`} />
          </svg>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoriesList;

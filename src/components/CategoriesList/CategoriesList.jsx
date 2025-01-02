import React from 'react';
import PropTypes from 'prop-types';
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

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeCategory: PropTypes.object,
  onCategoryClick: PropTypes.func.isRequired,
};

export default CategoriesList;

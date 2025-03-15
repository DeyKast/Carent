import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './header.module.css';
import { AuthProvider } from 'service/AuthProvider/authProvider';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [disableInteractions, setDisableInteractions] = useState(false);

  // Функція перемикання меню
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  // Функція закриття меню
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Закриваємо меню при кліку поза ним
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        menuOpen &&
        !event.target.closest(`.${css.navigationList}`) &&
        !event.target.closest(`.${css.burgerButton}`)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  // Блокуємо взаємодію з контентом при відкритому меню
  useEffect(() => {
    if (menuOpen) {
      setDisableInteractions(true);
      document.body.style.overflow = 'hidden'; // Заборона прокрутки
    } else {
      setTimeout(() => setDisableInteractions(false), 300); // Чекаємо анімацію перед розблокуванням
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        {/* Кнопка бургер-меню */}
        <button
          className={`${css.burgerButton} ${menuOpen ? css.opened : ''}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
        >
          <span className={css.burgerLine}></span>
          <span className={css.burgerLine}></span>
          <span className={css.burgerLine}></span>
        </button>

        {/* Навігаційне меню */}
        <nav
          className={`${css.navigationList} ${
            menuOpen ? css.menuOpen : css.menuClosed
          }`}
        >
          <Link className={css.navigationListItem} to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link
            className={`${css.navigationListItem} ${css.hiddenLink}`}
            to="/about"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            className={css.navigationListItem}
            to="/catalog"
            onClick={closeMenu}
          >
            Catalog
          </Link>
          <Link
            className={css.navigationListItem}
            to="/gallery"
            onClick={closeMenu}
          >
            Gallery
          </Link>
          <Link
            className={`${css.navigationListItem} ${css.hiddenLink}`}
            to="/contacts"
            onClick={closeMenu}
          >
            Contacts
          </Link>
        </nav>

        {/* Кнопки логіну */}
        <AuthProvider />
      </div>

      {/* Перекриття сторінки при відкритому меню */}
      {menuOpen && <div className={css.overlay}></div>}

      {/* Блокування контенту */}
      <div
        className={`${css.contentBlocker} ${
          disableInteractions ? css.disabled : ''
        }`}
      ></div>
    </header>
  );
};

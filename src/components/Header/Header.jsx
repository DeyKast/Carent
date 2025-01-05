import { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './header.module.css';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <button
          className={css.burgerButton}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
        >
          <span className={css.burgerLine}></span>
          <span className={css.burgerLine}></span>
          <span className={css.burgerLine}></span>
        </button>
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
        <ul className={css.loginWrapper}>
          <li>
            <Link className={css.navigationListItem} to="/signup">
              Sign Up
            </Link>
          </li>
          <li>
            <Link className={css.navigationListItem} to="/signin">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

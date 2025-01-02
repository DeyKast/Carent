import { Link } from 'react-router-dom';

import css from './header.module.css';

export const Header = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.headerContainer}>
          <nav className={css.navigationList}>
            <Link className={css.navigationListItem} to="/">
              Home
            </Link>
            <Link
              className={`${css.navigationListItem} ${css.hiderListItem}`}
              to="/"
            >
              About
            </Link>
            <Link className={css.navigationListItem} to="/catalog">
              Catalog
            </Link>
            <Link className={css.navigationListItem} to="/">
              Gallery
            </Link>
            <Link
              className={`${css.navigationListItem} ${css.hiderListItem}`}
              to="/"
            >
              Contacts
            </Link>
          </nav>
          <ul className={css.loginWrapper}>
            <li>
              <Link className={css.navigationListItem}>Sign Up</Link>
            </li>
            <li>
              <Link className={css.navigationListItem}>Sign In</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

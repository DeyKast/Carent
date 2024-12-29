import { Link } from 'react-router-dom';

import css from './header.module.css';

export const Header = () => {
  return (
    <>
      <header className={css.header}>
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
          <Link className={css.navigationListItem} to="/">
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
            <p>Sign Up</p>
          </li>
          <li>
            <p>Sign In</p>
          </li>
        </ul>
      </header>
    </>
  );
};

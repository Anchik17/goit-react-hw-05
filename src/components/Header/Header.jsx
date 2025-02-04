import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <div>
      <header className={s.header}>
        <nav className={s.nav}>
          <ul className={s.navList}>
            <li>
              <NavLink className={buildLinkClass} to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={buildLinkClass} to='/movies'>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

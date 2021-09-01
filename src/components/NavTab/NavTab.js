import './NavTab.css';
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__lu">
        <li className="navtab__li">
          <Link to="/" className="navtab__link">
            О проекте
          </Link>
        </li>
        <li className="navtab__li">
          <Link to="/" className="navtab__link">
            Технологии
          </Link>
        </li>
        <li className="navtab__li">
          <Link to="/" className="navtab__link">
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;

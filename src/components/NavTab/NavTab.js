import './NavTab.css';

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__lu">
        <li className="navtab__li">
          <a href="#about-project" className="navtab__link">
            О проекте
          </a>
        </li>
        <li className="navtab__li">
          <a href="#techs" className="navtab__link">
            Технологии
          </a>
        </li>
        <li className="navtab__li">
          <a href="#student" className="navtab__link">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;

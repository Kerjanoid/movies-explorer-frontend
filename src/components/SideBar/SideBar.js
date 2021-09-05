import "./SideBar.css";
import { NavLink } from "react-router-dom"

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <button className="sidebar__close-button" />
        <nav className="sidebar__navigation">
          <ul className="sidebar__links">
            <li className="sidebar__li">
              <NavLink
                to="/movies"
                className="sidebar__link"
                activeClassName="sidebar__link_active"
              >
                Фильмы
              </NavLink>
            </li>
            <li className="sidebar__li">
              <NavLink
                to="/saved-movies"
                className="sidebar__link"
                activeClassName="sidebar__link_active"
              >
                Сохраненные фильмы
              </NavLink>
            </li>
            <li className="sidebar__li sidebar__li_account-button">
              <NavLink
                to="/profile"
                className="sidebar__link sidebar__link_account-button"
                activeClassName="sidebar__link_active"
              >
                Аккаунт
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;

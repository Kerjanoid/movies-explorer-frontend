import "./SideBar.css";
import { NavLink } from "react-router-dom"

function SideBar({ isSideBarOpened, handleSideBarState }) {
  return (
    <div className={`sidebar ${isSideBarOpened ? "sidebar_opened" : ""}`}>
      <div className="sidebar__container">
        <button className="sidebar__close-button" onClick={handleSideBarState}/>
        <nav className="sidebar__navigation">
          <ul className="sidebar__links">
            <li className="sidebar__li">
              <NavLink
                exact to="/"
                className="sidebar__link"
                activeClassName="sidebar__link_active">
                Главная
              </NavLink>
            </li>
            <li className="sidebar__li">
              <NavLink
                to="/movies"
                className="sidebar__link"
                activeClassName="sidebar__link_active">
                Фильмы
              </NavLink>
            </li>
            <li className="sidebar__li">
              <NavLink
                to="/saved-movies"
                className="sidebar__link"
                activeClassName="sidebar__link_active">
                Сохраненные фильмы
              </NavLink>
            </li>
            <li className="sidebar__li sidebar__li_account-button">
              <NavLink
                to="/profile"
                className="sidebar__link sidebar__link_account-button">
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

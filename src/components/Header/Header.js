import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import Media from "react-media";

function Header({ loggedIn }) {
  return (
    <header className="header">
      <Link to="/" className="header__logo" />
      <div className="header__menu">
        {loggedIn ? (
          <Media queries={{ small: { maxWidth: 768 } }}>
            {(matches) =>
              matches.small ? (
                <div>Кнопка</div>
              ) : (
                <nav className="header__navigation header__navigation_logged-in">
                  <ul className="header__links header__links_logged-in">
                    <li className="header__li header__li_logged-in">
                      <NavLink
                        to="/movies"
                        className="header__link header__link_logged-in"
                        activeClassName="header__link_active">
                        Фильмы
                      </NavLink>
                    </li>
                    <li className="header__li header__li_logged-in">
                      <NavLink
                        to="/saved-movies"
                        className="header__link header__link_logged-in"
                        activeClassName="header__link_active">
                        Сохраненные фильмы
                      </NavLink>
                    </li>
                    <li className="header__li header__li_logged-in header__li_account-button">
                      <NavLink
                        to="/profile"
                        className="header__link header__link_logged-in header__link_account-button"
                        activeClassName="header__link_active">
                        Аккаунт
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              )
            }
          </Media>
        ) : (
          <nav className="header__navigation">
            <ul className="header__links">
              <li className="header__li">
                <NavLink
                  to="/signup"
                  className="header__link"
                  activeClassName="header__link_active">
                  Регистрация
                </NavLink>
              </li>
              <li className="header__li">
                <NavLink
                  to="/signin"
                  className="header__link header__link_entry-button"
                  activeClassName="header__link_active">
                  Войти
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;

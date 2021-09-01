import "./Header.css";
import { Link } from "react-router-dom";

function Header({ loggedIn }) {
  return (
    <header className="header">
      <Link to="/" className="header__logo"></Link>
      <div className="header__menu">
        {loggedIn ? (
          <nav className="header__navigation header__navigation_logged-in">
            <ul className="header__links header__links_logged-in">
              <li className="header__li header__li_logged-in">
                <Link
                  to="/movies"
                  className="header__link header__link_logged-in"
                >
                  Фильмы
                </Link>
              </li>
              <li className="header__li header__li_logged-in">
                <Link
                  to="/saved-movies"
                  className="header__link header__link_logged-in font-weight-400"
                >
                  Сохраненные фильмы
                </Link>
              </li>
              <li className="header__li header__li_logged-in header__li_account-button">
                <Link
                  to="/profile"
                  className="header__link header__link_logged-in header__link_account-button"
                >
                  Аккаунт
                </Link>
              </li>
              {/* разобраться со шрифтами, переместить кнопку "Аккаунт" вконец */}
            </ul>
          </nav>
        ) : (
          <nav className="header__navigation">
            <ul className="header__links">
              <li className="header__li">
                <Link to="/signup" className="header__link">
                  Регистрация
                </Link>
              </li>
              <li className="header__li">
                <Link
                  to="/signin"
                  className="header__link header__link_entry-button"
                >
                  Войти
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;

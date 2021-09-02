import './NotFound.css';
import { useHistory, Link } from "react-router-dom";

function NotFound() {
  let history = useHistory();

  return (
    <main className="not-found">
      <h1 className="not-found__titel">404</h1>
      <p1 className="not-found__subtitel">Страница не найдена</p1>
      <Link onClick={history.goBack} className="header__link header__link_logged-in">
        Назад
      </Link>
    </main>
  );
}

export default NotFound;

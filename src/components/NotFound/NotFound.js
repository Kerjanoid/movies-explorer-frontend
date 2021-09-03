import './NotFound.css';
import { useHistory } from "react-router-dom";

function NotFound() {
  let history = useHistory();

  return (
    <main className="not-found">
      <h1 className="not-found__titel">404</h1>
      <p className="not-found__message">Страница не найдена</p>
      <button onClick={history.goBack} className="not-found__link">
        Назад
      </button>
    </main>
  );
}

export default NotFound;

import './Login.css';
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login">
      <div className="login__header">
        <Link to="/" className="login__logo" />
        <h1 className="login__greeting">Рады видеть!</h1>
      </div>
      <form className="login__form">
        <div className="login__wrapper">
          <label className="login__input">E-mail
            <input type="email" name="email" id="email"
                className="login__textfield login__textfield_error" placeholder="Введите email"
                required autoComplete="off" />
            <span className="login__error login__error_visible" id="email-error">Что-то пошло не так...</span>
          </label>
          <label className="login__input">Пароль
            <input type="password" name="password" id="password"
                className="login__textfield" placeholder="Введите пароль"
                required autoComplete="off" />
            <span className="login__error" id="password-error">Что-то пошло не так...</span>
          </label>
        </div>
        <div className="login__wrapper">
          <button className="login__button" type="submit">Войти</button>
          <p className="login__text">Ещё не зарегистрированы?<Link className="login__link" to="/signup">Регистрация</Link></p>
        </div>
      </form>
    </section>
  );
}

export default Login;

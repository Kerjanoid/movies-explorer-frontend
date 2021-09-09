import './Register.css';
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register">
      <div className="register__header">
        <Link to="/" className="register__logo" />
        <h1 className="register__greeting">Добро пожаловать!</h1>
      </div>
      <form className="register__form">
        <div className="register__wrapper">
          <label className="register__input">Имя
            <input type="text" name="name" id="name"
                className="register__textfield" placeholder="Введите имя"
                required autoComplete="off" />
            <span className="register__error" id="name-error">Что-то пошло не так...</span>
          </label>
          <label className="register__input">E-mail
            <input type="email" name="email" id="email"
                className="register__textfield register__textfield_error" placeholder="Введите email"
                required autoComplete="off" />
            <span className="register__error register__error_visible" id="email-error">Что-то пошло не так...</span>
          </label>
          <label className="register__input">Пароль
            <input type="password" name="password" id="password"
                className="register__textfield" placeholder="Введите пароль"
                required autoComplete="off" />
            <span className="register__error" id="password-error">Что-то пошло не так...</span>
          </label>
        </div>
        <div className="register__wrapper">
          <button className="register__button" type="submit">Зарегистрироваться</button>
          <p className="register__text">Уже зарегистрированы?<Link className="register__link" to="/signin">Войти</Link></p>
        </div>
      </form>
    </section>
  );
}

export default Register;

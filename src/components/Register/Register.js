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
                required  />
          </label>
          <label className="register__input">E-mail
            <input type="email" name="email" id="email"
                className="register__textfield" placeholder="Введите email"
                required  />
          </label>
          <label className="register__input">Пароль
            <input type="password" name="password" id="password"
                className="register__textfield" placeholder="Введите пароль"
                required  />
          </label>
        </div>
        <div className="register__wrapper">
          <button className="register__button" type="submit">Зарегистрироваться</button>
          <p className="register__text">Уже зарегистрированы? <Link className="register__link" to="/signin">Войти</Link></p>
        </div>
      </form>
    </section>
  );
}

export default Register;

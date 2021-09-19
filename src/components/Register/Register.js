import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register({ handleRegister, waiting, disableButton }) {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = data
    handleRegister(name, email, password)
  }

  return (
    <section className="register">
      <div className="register__header">
        <Link to="/" className="register__logo" />
        <h1 className="register__greeting">Добро пожаловать!</h1>
      </div>
      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__form-wrapper">
          <label className="register__form-input">Имя
            <input type="text"
              name="name"
              id="name"
              className="register__form-textfield"
              placeholder="Введите имя"
              required
              autoComplete="off"
              onChange={handleChange}
              value={data.name} />
            <span className="register__form-error" id="name-error">Что-то пошло не так...</span>
          </label>
          <label className="register__form-input">E-mail
            <input type="email"
              name="email"
              id="email"
              className="register__form-textfield"
              placeholder="Введите email"
              required
              autoComplete="off"
              onChange={handleChange}
              value={data.email} />
            <span className="register__form-error" id="email-error">Что-то пошло не так...</span>
          </label>
          <label className="register__form-input">Пароль
            <input type="password"
              name="password"
              id="password"
              className="register__form-textfield"
              placeholder="Введите пароль"
              required
              autoComplete="off"
              onChange={handleChange}
              value={data.password} />
            <span className="register__form-error" id="password-error">Что-то пошло не так...</span>
          </label>
        </div>
        <div className="register__form-wrapper">
          <button
            className={`register__form-button ${disableButton ? "register__form-button_disabled" : ""}`}
            type="submit"
            disabled={disableButton}
            aria-label={waiting || "Зарегистрироваться"}>{waiting || "Зарегистрироваться"}</button>
          <p className="register__form-text">Уже зарегистрированы?
            <Link className="register__form-link" to="/signin" aria-label="Войти">Войти</Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Register;

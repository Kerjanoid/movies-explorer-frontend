import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import useFormValidation from "../../utils/hooks/useFormWithValidation";

function Register({ handleRegister, waiting, disableButton, isBadRequest }) {
  const history = useHistory()

  useEffect(() => {
    stateCheck()
  }, []);

  const stateCheck = () => {
    const token = localStorage.getItem("token")
    if (token) {
      history.push("/")
    }
  }

  const { values, errors, isValid, handleChange } = useFormValidation({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values
    if (isValid) {
      handleRegister(name, email, password)
    }
  }

  return (
    <section className="register">
      <div className="register__header">
        <Link to="/" className="register__logo" />
        <h1 className="register__greeting">Добро пожаловать!</h1>
      </div>
      <form className="register__form" onSubmit={handleSubmit} noValidate>
        <div className="register__form-wrapper">
          <label className="register__form-input">Имя
            <input type="text"
              name="name"
              id="name"
              className={`register__form-textfield ${errors.name && "register__form-textfield_error"}`}
              placeholder="Введите имя"
              required
              minLength="2"
              maxLength="30"
              autoComplete="off"
              onChange={handleChange}
              value={values.name} />
            {errors.name && <span className="register__form-error" id="name-error">{errors.name}</span>}
          </label>
          <label className="register__form-input">E-mail
            <input type="email"
              name="email"
              id="email"
              className={`register__form-textfield ${errors.email && "register__form-textfield_error"}`}
              placeholder="Введите email"
              autoComplete="off"
              required
              onChange={handleChange}
              value={values.email} />
            {errors.email && <span className="register__form-error" id="email-error">{errors.email}</span>}
          </label>
          <label className="register__form-input">Пароль
            <input type="password"
              name="password"
              id="password"
              className={`register__form-textfield ${errors.password && "register__form-textfield_error"}`}
              placeholder="Введите пароль"
              required
              minLength="8"
              maxLength="35"
              autoComplete="off"
              onChange={handleChange}
              value={values.password} />
            {errors.password && <span className="register__form-error" id="password-error">{errors.password}</span>}
          </label>
        </div>
        <div className="register__form-wrapper">
          <button
            className={`register__form-button ${(disableButton || !isValid) ? "register__form-button_disabled" : ""}`}
            type="submit"
            autoComplete="off"
            disabled={disableButton || !isValid}
            aria-label={waiting || "Зарегистрироваться"}>{waiting || "Зарегистрироваться"}
          </button>
          {isBadRequest && <span className="register__submit-error">При регистрации произошла ошибка.</span>}
          <p className="register__form-text">Уже зарегистрированы?
            <Link className="register__form-link" to="/signin" aria-label="Войти">Войти</Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Register;

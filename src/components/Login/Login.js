import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import useFormValidation from "../../utils/hooks/useFormWithValidation";

function Login({ disableButton, waiting, handleLogin, isBadRequest }) {
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
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (isValid) {
      handleLogin(email, password);
    }
  }

  return (
    <section className="login">
      <div className="login__header">
        <Link to="/" className="login__logo" />
        <h1 className="login__greeting">Рады видеть!</h1>
      </div>
      <form className="login__form" onSubmit={handleSubmit} noValidate>
        <div className="login__form-wrapper">
          <label className="login__form-input">E-mail
            <input type="email"
              name="email"
              id="email"
              className={`login__form-textfield  ${errors.email && "login__form-textfield_error"}`}
              placeholder="Введите email"
              required
              autoComplete="off"
              onChange={handleChange}
              value={values.email}/>
            {errors.email && <span className="login__form-error" id="email-error">{errors.email}</span>}
          </label>
          <label className="login__form-input">Пароль
            <input type="password"
              name="password"
              id="password"
              className={`login__form-textfield  ${errors.password && "login__form-textfield_error"}`}
              placeholder="Введите пароль"
              required
              autoComplete="off"
              minLength="8"
              maxLength="35"
              onChange={handleChange}
              value={values.password} />
            {errors.password && <span className="login__form-error" id="password-error">{errors.password}</span>}
          </label>
        </div>
        <div className="login__form-wrapper">
          <button
            className={`login__form-button ${(disableButton || !isValid) ? "login__form-button_disabled" : ""}`}
            type="submit"
            disabled={disableButton || !isValid}
            aria-label={waiting || "Войти"}>{waiting || "Войти"}</button>
          {isBadRequest && <span className="login__submit-error">При попытке входа произошла ошибка.</span>}
          <p className="login__form-text">Ещё не зарегистрированы?
            <Link className="login__form-link" to="/signup" aria-label="Регистрация">Регистрация</Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Login;

import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function Login({ disableButton, waiting, handleLogin }) {
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

  const [data, setData] = useState({
    email: "",
    password: "",
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
    const { email, password } = data
    handleLogin(email, password)
  }

  return (
    <section className="login">
      <div className="login__header">
        <Link to="/" className="login__logo" />
        <h1 className="login__greeting">Рады видеть!</h1>
      </div>
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__form-wrapper">
          <label className="login__form-input">E-mail
            <input type="email"
              name="email"
              id="email"
              className="login__form-textfield"
              placeholder="Введите email"
              required
              autoComplete="off"
              onChange={handleChange}
              value={data.email}/>
            <span className="login__form-error" id="email-error">Что-то пошло не так...</span>
          </label>
          <label className="login__form-input">Пароль
            <input type="password"
              name="password"
              id="password"
              className="login__form-textfield"
              placeholder="Введите пароль"
              required
              autoComplete="off"
              onChange={handleChange}
              value={data.password} />
            <span className="login__form-error" id="password-error">Что-то пошло не так...</span>
          </label>
        </div>
        <div className="login__form-wrapper">
          <button
            className={`login__form-button ${disableButton ? "login__form-button_disabled" : ""}`}
            type="submit"
            disabled={disableButton}
            aria-label={waiting || "Войти"}>{waiting || "Войти"}</button>
          <p className="login__form-text">Ещё не зарегистрированы?
            <Link className="login__form-link" to="/signup" aria-label="Регистрация">Регистрация</Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Login;

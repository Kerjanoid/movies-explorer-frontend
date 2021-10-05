import './Login.css';
import { Link } from "react-router-dom";
import Form from "../Form/Form"

function Login() {
  return (
    <section className="login">
      <div className="login__header">
        <Link to="/" className="login__logo" />
        <h1 className="login__greeting">Рады видеть!</h1>
      </div>
      <Form
        buttonText={"Войти"}
        formText={"Ещё не зарегистрированы?"}
        linkText={"Регистрация"}
        linkPath={"/signup"}
      />
    </section>
  );
}

export default Login;

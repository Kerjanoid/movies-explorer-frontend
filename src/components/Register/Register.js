import './Register.css';
import { Link } from "react-router-dom";
import Form from "../Form/Form"

function Register() {
  return (
    <section className="register">
      <div className="register__header">
        <Link to="/" className="register__logo" />
        <h1 className="register__greeting">Добро пожаловать!</h1>
      </div>
      <Form
        buttonText={"Зарегистрироваться"}
        formText={"Уже зарегистрированы?"}
        linkText={"Войти"}
        linkPath={"/signin"}
      />
    </section>
  );
}

export default Register;

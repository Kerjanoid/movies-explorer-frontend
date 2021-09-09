import "./Form.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Form({ buttonText, formText, linkText, linkPath }) {
  const { pathname } = useLocation();

  return (
      <form className="form">
        <div className="form__wrapper">
          {pathname === "/signup" ?
            <label className="form__input">Имя
              <input type="text" name="name" id="name"
                className="form__textfield" placeholder="Введите имя"
                required autoComplete="off" />
              <span className="form__error" id="name-error">Что-то пошло не так...</span>
            </label>
            :
            <></>
          }
          <label className="form__input">E-mail
            <input type="email" name="email" id="email"
                className="form__textfield form__textfield_error" placeholder="Введите email"
                required autoComplete="off" />
            <span className="form__error form__error_visible" id="email-error">Что-то пошло не так...</span>
          </label>
          <label className="form__input">Пароль
            <input type="password" name="password" id="password"
                className="form__textfield" placeholder="Введите пароль"
                required autoComplete="off" />
            <span className="form__error" id="password-error">Что-то пошло не так...</span>
          </label>
        </div>
        <div className="form__wrapper">
          <button className="form__button" type="submit">{ buttonText }</button>
          <p className="form__text">{ formText }<Link className="form__link" to={linkPath}>{ linkText }</Link></p>
        </div>
      </form>
  );
}

export default Form;

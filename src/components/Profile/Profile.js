import "./Profile.css";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { useState, useEffect, useContext, useRef } from "react";
import { CurrentUserContext } from "../../contexts/CurrenUserContext";
import useFormValidation from "../../utils/hooks/useFormWithValidation";

function Profile({
  loggedIn,
  isSideBarOpened,
  handleSideBarState,
  screenWidth,
  handleUpdateUser,
  waiting,
  handleSignOut,
  disableButton,
  isBadRequest,
  isVisibleRequest }) {

  const currentUser = useContext(CurrentUserContext)
  const nameRef = useRef("")
  const emailRef = useRef("")

  const { values, errors, handleChange, isValid } = useFormValidation({
    name: nameRef.current.value,
    email: emailRef.current.value
  });

  const [isSameUserData, setIsSameUserData] = useState(true);

  useEffect(() => {
    setIsSameUserData(nameRef.current.value === currentUser.name && emailRef.current.value === currentUser.email);
  }, [values.name, values.email, currentUser.name, currentUser.email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    handleUpdateUser(name, email);
    e.target.reset()
  }

  return (
    <>
      <Header loggedIn={loggedIn}
        isSideBarOpened={isSideBarOpened}
        handleSideBarState={handleSideBarState}
        screenWidth={screenWidth} />
      <main className="content">
        <section className="profile">
          <h1 className="profile__greeting">Привет, {currentUser.name}!</h1>
          <form className="profile__form"  onSubmit={handleSubmit} noValidate>
            <div className="profile__form-wrapper">
              <label className="profile__input">Имя
                <input type="text"
                  name="name"
                  id="name"
                  className="profile__textfield"
                  placeholder="Введите имя"
                  required
                  autoComplete="off"
                  defaultValue={currentUser.name}
                  ref={nameRef}
                  onChange={handleChange}
                  readOnly={waiting} />
                  {errors.name && <span className="profile__form-error" id="name-error">{errors.name}</span>}
              </label>
              <label className="profile__input">E-mail
                <input type="email"
                  name="email"
                  id="email"
                  className="profile__textfield"
                  placeholder="Введите email"
                  required
                  autoComplete="off"
                  defaultValue={currentUser.email}
                  ref={emailRef}
                  onChange={handleChange}
                  readOnly={waiting}
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+" />
                  {errors.email && <span className="profile__form-error profile__form-error_email" id="email-error">{errors.email}</span>}
              </label>
            </div>
          <div className="profile__button-wrapper">
            <button className={`profile__button-edit ${(disableButton || isSameUserData || !isValid) ? "profile__button-edit_disabled" : ""}`}
              type="submit"
              disabled={disableButton || isSameUserData || !isValid}>{waiting || "Редактировать"}
            </button>
            {isVisibleRequest &&
                (isBadRequest ?
                  <span className="profile__edit-error">При обновлении профиля произошла ошибка</span>:
                  <span className="profile__edit-ok">Профиль успешно обновлен</span>)}
            <button className="profile__button-logout" type="button" onClick={handleSignOut}>Выйти из аккаунта</button>
          </div>
          </form>
        </section>
      </main>
      <SideBar isSideBarOpened={isSideBarOpened}
        handleSideBarState={handleSideBarState}/>
    </>
  );
}

export default Profile;

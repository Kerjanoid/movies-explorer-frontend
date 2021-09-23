import "./Profile.css";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrenUserContext";

function Profile({ loggedIn, isSideBarOpened, handleSideBarState, screenWidth, handleUpdateUser, waiting, disableButton, handleSignOut }) {
  const [data, setData] = useState({
    name: "",
    email: "",
  })

  const currentUser = useContext(CurrentUserContext)

  useEffect(() => {
    setData(currentUser);
  }, [currentUser]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = data;
    handleUpdateUser(name, email);
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
          <form className="profile__form"  onSubmit={handleSubmit}>
            <div className="profile__form-wrapper">
              <label className="profile__input">Имя
                <input type="text"
                  name="name"
                  id="name"
                  className="profile__textfield"
                  placeholder="Введите имя"
                  required
                  autoComplete="off"
                  value={data.name || ''}
                  onChange={handleChange} />
              </label>
              <label className="profile__input">E-mail
                <input type="email"
                  name="email"
                  id="email"
                  className="profile__textfield"
                  placeholder="Введите email"
                  required
                  autoComplete="off"
                  value={data.email || ''}
                  onChange={handleChange} />
              </label>
            </div>
          <div className="profile__button-wrapper">
            <button className={`form__button-edit ${disableButton ? "form__button-edit_disabled" : ""}`}
            type="submit"
            disabled={disableButton}>{waiting || "Редактировать"}</button>
            <button className="form__button-logout" type="button" onClick={handleSignOut}>Выйти из аккаунта</button>
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

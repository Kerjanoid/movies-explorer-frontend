import "./Profile.css";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

function Profile({ loggedIn, isSideBarOpened, handleSideBarState }) {
  return (
    <>
      <Header loggedIn={loggedIn}
        isSideBarOpened={isSideBarOpened}
        handleSideBarState={handleSideBarState} />
      <main className="content">
        <section className="profile">
          <h1 className="profile__greeting">Привет, Виталий!</h1>
          <form className="profile__form">
          <div className="profile__form-wrapper">
            <label className="profile__input">Имя
              <input type="text" name="name" id="name"
                className="profile__textfield" placeholder="Введите имя"
                required autoComplete="off" />
            </label>
          <label className="profile__input">E-mail
            <input type="email" name="email" id="email"
                className="profile__textfield" placeholder="Введите email"
                required autoComplete="off" />
          </label>
        </div>
        <div className="profile__button-wrapper">
          <button className="form__button-edit" type="submit">Редактировать</button>
          <button className="form__button-logout" type="button">Выйти из аккаунта</button>
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

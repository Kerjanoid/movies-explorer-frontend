import "./Main.css";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";

function Main({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="content">
        <Promo />
        <AboutProject />
        <Techs />
        {/*
    <AboutMe />
    <NavTab />
    <Portfolio /> */}
      </main>
    </>
  );
}

export default Main;

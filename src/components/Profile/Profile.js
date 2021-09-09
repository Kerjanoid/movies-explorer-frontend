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

      </main>
      <SideBar isSideBarOpened={isSideBarOpened}
        handleSideBarState={handleSideBarState}/>
    </>
  );
}

export default Profile;

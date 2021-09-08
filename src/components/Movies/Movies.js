import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";

function Movies({ loggedIn, isSideBarOpened, handleSideBarState, isLiked, handleLikeClick }) {
  return (
    <>
      <Header loggedIn={loggedIn}
        isSideBarOpened={isSideBarOpened}
        handleSideBarState={handleSideBarState} />
      <main className="content">
        <SearchForm />
        <MoviesCardList isLiked={isLiked}
        handleLikeClick={handleLikeClick}/>
      </main>
      <Footer />
      <SideBar isSideBarOpened={isSideBarOpened}
        handleSideBarState={handleSideBarState}/>
    </>
  );
}

export default Movies;

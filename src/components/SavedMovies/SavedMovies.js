import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";

function SavedMovies({ loggedIn, isSideBarOpened, handleSideBarState, movies, screenWidth, isLiked, handleLikeClick }) {
  return (
    <>
      <Header loggedIn={loggedIn}
        isSideBarOpened={isSideBarOpened}
        handleSideBarState={handleSideBarState}
        screenWidth={screenWidth} />
      <main className="content">
        <SearchForm />
        {/* <Preloader /> */}
      {/* Preloader будет вставляться вместо <MoviesCardList/> при выполнении поиска */}
        <MoviesCardList
          movies={movies}/>
      </main>
      <Footer />
      <SideBar isSideBarOpened={isSideBarOpened}
        handleSideBarState={handleSideBarState}/>
    </>
  );
}

export default SavedMovies;

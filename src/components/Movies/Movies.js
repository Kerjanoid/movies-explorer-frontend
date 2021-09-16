import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm"
import Preloader from "../Preloader/Preloader"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";

function Movies({ loggedIn, isSideBarOpened, handleSideBarState, isLiked, handleLikeClick, movies }) {
  return (
    <>
      <Header loggedIn={loggedIn}
        isSideBarOpened={isSideBarOpened}
        handleSideBarState={handleSideBarState} />
      <main className="content">
        <SearchForm />
        {/* <Preloader /> */}
      {/* Preloader будет вставляться вместо <MoviesCardList/> при выполнении поиска */}
        <MoviesCardList isLiked={isLiked}
        handleLikeClick={handleLikeClick}
        movies={movies} />
      </main>
      <Footer />
      <SideBar isSideBarOpened={isSideBarOpened}
        handleSideBarState={handleSideBarState}/>
    </>
  );
}

export default Movies;

import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm"
import Preloader from "../Preloader/Preloader"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import { useState, useEffect } from "react"

function Movies({ loggedIn, isSideBarOpened, handleSideBarState, isLiked, handleLikeClick, movies, screenWidth }) {
  const [initialMoviesCount, setInitialMoviesCount] = useState(0)
  const [addMoviesCount, setAddMoviesCount] = useState(0)

  // Изначальное количество карточек фильмов на экране и карточек фильмов, добавляемых при нажании на кнопку "Ещё"
  useEffect(() => {
    if (screenWidth > 1297) {
      setInitialMoviesCount(16);
      setAddMoviesCount(4);
    } else if (screenWidth > 1237) {
      setInitialMoviesCount(12);
      setAddMoviesCount(3);
    } else if (screenWidth > 785) {
      setInitialMoviesCount(8);
      setAddMoviesCount(2);
    } else {
      setInitialMoviesCount(5);
      setAddMoviesCount(2);
    }}
  , []);

  const moviesVisibleCount = movies.slice(0, initialMoviesCount);

  function showMoreMovies() {
    setInitialMoviesCount(prevState => prevState + addMoviesCount);
  }

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
        <MoviesCardList isLiked={isLiked}
          handleLikeClick={handleLikeClick}
          showMoreMovies={showMoreMovies}
          movies={moviesVisibleCount} />
      </main>
      <Footer />
      <SideBar isSideBarOpened={isSideBarOpened}
        handleSideBarState={handleSideBarState}/>
    </>
  );
}

export default Movies;

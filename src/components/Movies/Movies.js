import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import NothingFound from "../NothingFound/NothingFound";
import { useState, useEffect } from "react";

function Movies({ loggedIn,
  isSideBarOpened,
  handleSideBarState,
  handleLikeClick,
  movies,
  searchMovies,
  screenWidth,
  handleChangeСheckbox,
  checked,
  isLoading,
  saveMovies,
  deleteSavedMoivies,
  savedMovies,
  nothingFoundText }) {

  const [showingMoviesCount, setShowingMoviesCount] = useState(0)
  const [addingMoviesCount, setAddingMoviesCount] = useState(0)

  useEffect(() => {
    if (screenWidth > 1297) {
      setShowingMoviesCount(16);
      setAddingMoviesCount(4);
    } else if (screenWidth > 1237) {
      setShowingMoviesCount(12);
      setAddingMoviesCount(3);
    } else if (screenWidth > 785) {
      setShowingMoviesCount(8);
      setAddingMoviesCount(2);
    } else {
      setShowingMoviesCount(5);
      setAddingMoviesCount(2);
    }}
  , [screenWidth]);

  const moviesVisibleCount = movies.slice(0, showingMoviesCount);

  function showMoreMovies() {
    setShowingMoviesCount(prevState => prevState + addingMoviesCount);
  }

  return (
    <>
      <Header
        loggedIn={loggedIn}
        isSideBarOpened={isSideBarOpened}
        handleSideBarState={handleSideBarState}
        screenWidth={screenWidth} />
      <main className="content">
        <SearchForm
          searchMovies={searchMovies}
          handleChangeСheckbox={handleChangeСheckbox}
          checked={checked}
          isSaved={false} />
        {isLoading ?
          <Preloader /> :
          (movies.length === 0) ?
            <NothingFound
              nothingFoundText={nothingFoundText} /> :
            <MoviesCardList
              handleLikeClick={handleLikeClick}
              showMoreMovies={showMoreMovies}
              moviesVisibleCount={moviesVisibleCount}
              movies={movies}
              saveMovies={saveMovies}
              deleteSavedMoivies={deleteSavedMoivies}
              savedMovies={savedMovies}
              isSaved={false} />}
      </main>
      <Footer />
      <SideBar isSideBarOpened={isSideBarOpened}
        handleSideBarState={handleSideBarState}/>
    </>
  );
}

export default Movies;

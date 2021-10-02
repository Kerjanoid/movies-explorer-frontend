import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";

function SavedMovies({
  loggedIn,
  isSideBarOpened,
  handleSideBarState,
  screenWidth,
  handleLikeClick,
  searchMovies,
  handleChangeСheckbox,
  checked,
  isLoading,
  deleteSavedMoivies,
  savedMovies,
  movies,
  nothingFoundText }) {

  return (
    <>
      <Header loggedIn={loggedIn}
        isSideBarOpened={isSideBarOpened}
        handleSideBarState={handleSideBarState}
        screenWidth={screenWidth} />
      <main className="content">
        <SearchForm
          searchMovies={searchMovies}
          handleChangeСheckbox={handleChangeСheckbox}
          checked={checked}
          isSaved={true} />
        {isLoading ?
          <Preloader /> :
          (movies.length === 0) ?
            <NothingFound
              nothingFoundText={nothingFoundText} /> :
            <MoviesCardList
              handleLikeClick={handleLikeClick}
              deleteSavedMoivies={deleteSavedMoivies}
              movies={movies}
              moviesVisibleCount={movies}
              savedMovies={savedMovies}
              isSaved={true} />}
      </main>
      <Footer />
      <SideBar isSideBarOpened={isSideBarOpened}
        handleSideBarState={handleSideBarState}/>
    </>
  );
}

export default SavedMovies;

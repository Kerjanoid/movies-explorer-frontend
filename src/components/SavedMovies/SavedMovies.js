import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import Preloader from "../Preloader/Preloader";
import { useState, useEffect } from "react";

function SavedMovies({
  loggedIn,
  isSideBarOpened,
  handleSideBarState,
  movies,
  screenWidth,
  handleLikeClick,
  searchMovies,
  handleChangeСheckbox,
  checked,
  isLoading,
  isSaved,
  deleteSavedMoivies,
  savedMovies }) {

  const moviesVisibleCount = movies;

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
        <MoviesCardList
          handleLikeClick={handleLikeClick}
          deleteSavedMoivies={deleteSavedMoivies}
          movies={movies}
          moviesVisibleCount={moviesVisibleCount}
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

import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import { useState, useEffect } from "react";

function SavedMovies({ loggedIn, isSideBarOpened, handleSideBarState, movies, screenWidth, isLiked, handleLikeClick, searchMovies }) {
  const disableMoreButton = true;

  const moviesVisibleCount = movies;

  return (
    <>
      <Header loggedIn={loggedIn}
        isSideBarOpened={isSideBarOpened}
        handleSideBarState={handleSideBarState}
        screenWidth={screenWidth} />
      <main className="content">
        <SearchForm
          searchMovies={searchMovies} />
        {/* <Preloader /> */}
      {/* Preloader будет вставляться вместо <MoviesCardList/> при выполнении поиска */}
        <MoviesCardList isLiked={isLiked}
          handleLikeClick={handleLikeClick}
          movies={movies}
          disableMoreButton={disableMoreButton}
          moviesVisibleCount={moviesVisibleCount} />
      </main>
      <Footer />
      <SideBar isSideBarOpened={isSideBarOpened}
        handleSideBarState={handleSideBarState}/>
    </>
  );
}

export default SavedMovies;

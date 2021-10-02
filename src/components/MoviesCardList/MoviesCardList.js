import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList({ moviesVisibleCount, showMoreMovies, movies, saveMovies, deleteSavedMoivies, isSaved, savedMovies }) {
  const { pathname } = useLocation();

  return (
    <section className="cards">
      <div className="cards__container">
        {pathname === "/movies" ? moviesVisibleCount.map(movie => (
          <MoviesCard
            movie={movie}
            key={movie.id}
            saveMovies={saveMovies}
            deleteSavedMoivies={deleteSavedMoivies}
            isSaved={isSaved}
            savedMovies={savedMovies} />
        )) : moviesVisibleCount.map(movie => (
          <MoviesCard
            movie={movie}
            key={movie.movieId}
            saveMovies={saveMovies}
            deleteSavedMoivies={deleteSavedMoivies}
            isSaved={isSaved}
            savedMovies={savedMovies} />
        ))}
      </div>
      {pathname === "/movies" ?
        (movies.length > moviesVisibleCount.length) ?
          <button className="cards__more-button" onClick={showMoreMovies}>Ещё</button> : <></>
        : <></>}
    </section>
  );
}

export default MoviesCardList;

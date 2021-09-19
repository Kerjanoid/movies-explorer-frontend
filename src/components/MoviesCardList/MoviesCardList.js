import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard"

function MoviesCardList({moviesVisibleCount, showMoreMovies, movies}) {

  return (
    <section className="cards">
      <div className="cards__container">
        {moviesVisibleCount.map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie.id} />
        ))}
      </div>
      {(movies.length > moviesVisibleCount.length) ? <button className="cards__more-button" onClick={showMoreMovies}>Ещё</button> : <></>}
    </section>
  );
}

export default MoviesCardList;

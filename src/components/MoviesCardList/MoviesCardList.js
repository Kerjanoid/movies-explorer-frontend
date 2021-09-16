import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard"

function MoviesCardList({movies}) {
  console.log(movies)

  return (
    <section className="cards">
      <div className="cards__container">
        {movies.map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie.id} />
        ))}
      </div>
      <button className="cards__more-button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;

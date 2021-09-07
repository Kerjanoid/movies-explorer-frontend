import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard"

function MoviesCardList() {
  return (
    <section className="cards">
      <div className="cards__container">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <button className="cards__more-button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;

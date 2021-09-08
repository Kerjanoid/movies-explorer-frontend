import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard"
import Preloader from "../Preloader/Preloader"

function MoviesCardList() {
  return (
    <section className="cards">
      {/* <Preloader /> */}
      {/* Preloader будет вставляться вместо <div className="cards__container"></div> при выполнении поиска */}
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

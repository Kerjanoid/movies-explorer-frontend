import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <label className="search__form-label">
            <input className="search__form-input" type="text" name="search-movie" placeholder="Фильм" />
          </label>
          <input className="search__button" type="submit" value="Найти" />
        </form>
        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;

import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
import { useState } from "react";

function SearchForm({ handleSearchMovies, handleChangeСheckbox, checked }) {
  const [inputText, setInputText] = useState("")

  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSearcMovies = (e) => {
    e.preventDefault();
    handleSearchMovies(inputText)
    setInputText("")
  }

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSearcMovies}>
          <label className="search__form-label">
            <input className="search__form-input"
              type="text"
              name="search"
              id="searcht"
              placeholder="Фильм"
              autoComplete="off"
              value={inputText}
              onChange={handleChange} />
          </label>
          <input className="search__button" type="submit" value="Найти" />
        </form>
        <FilterCheckbox
          handleChangeСheckbox={handleChangeСheckbox}
          checked={checked} />
      </div>
    </section>
  );
}

export default SearchForm;

import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
import useFormValidation from "../../utils/hooks/useFormWithValidation";
import { useState } from "react";

function SearchForm({ searchMovies, handleChangeСheckbox, checked, isLoading }) {
  const [errorText, setErrorText] = useState("");

  const { values, isValid, handleChange } = useFormValidation({
    search: "",
  });

  const handleSearcMovies = (e) => {
    e.preventDefault();
    if (isValid) {
      searchMovies(values.search)
    } else {
      setErrorText("Нужно ввеcти ключевое слово.")
    }
  }

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSearcMovies} noValidate>
          <label htmlFor="search" className="search__form-label">
            <input className="search__form-input"
              type="text"
              name="search"
              id="search"
              placeholder="Фильм"
              autoComplete="off"
              required
              value={values.search}
              onChange={handleChange}
              readOnly={isLoading} />
          </label>
          <span className="search__form-error" id="search-error">{isValid ? "" : `${errorText}`}</span>
          <input className={`search__button ${(isValid && !isLoading) ? "" : "search__button_disabled"}`}
            type="submit"
            value="Найти"
            disabled={isLoading}/>
        </form>
        <FilterCheckbox
          handleChangeСheckbox={handleChangeСheckbox}
          checked={checked} />
      </div>
    </section>
  );
}

export default SearchForm;

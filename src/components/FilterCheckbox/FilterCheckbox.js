import './FilterCheckbox.css';

function FilterCheckbox({ handleChangeСheckbox, checked }) {
  return (
    <form className="checkbox">
      <label className="checkbox__form-label" htmlFor="short-film">
        <input
          className="checkbox__input checkbox__input_hidden"
          name="short-film"
          type="checkbox"
          id="short-film"
          checked={checked}
          onChange={handleChangeСheckbox} />
        <span className="checkbox__input checkbox__input_visible" />
        <span className="checkbox__form-text">Короткометражки</span>
      </label>
    </form>
  );
}

export default FilterCheckbox;

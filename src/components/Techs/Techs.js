import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <div className="techs__title-container">
        <h2 className="techs__title">Технологии</h2>
      </div>
      <div className="techs__info-container">
        <h3 className="techs__info-title">7 технологий</h3>
        <p className="techs__info-text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className="techs__list">
        <li className="techs__item">
          <p className="techs__item-name">HTML</p>
        </li>
        <li className="techs__item">
          <p className="techs__item-name">CSS</p>
        </li>
        <li className="techs__item">
          <p className="techs__item-name">JS</p>
        </li>
        <li className="techs__item">
          <p className="techs__item-name">React</p>
        </li>
        <li className="techs__item">
          <p className="techs__item-name">Git</p>
        </li>
        <li className="techs__item">
          <p className="techs__item-name">Express.js</p>
        </li>
        <li className="techs__item">
          <p className="techs__item-name">mongoDB</p>
        </li>
      </ul>
    </section>
  );
}

export default Techs;

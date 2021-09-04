import myPhoto from "../../images/my-photo.jpeg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__title-container">
        <h2 className="about-me__title">Студент</h2>
      </div>
      <div className="about-me__info-container">
        <div className="about-me__info">
          <h3 className="about-me__name">Вячеслав</h3>
          <h4 className="about-me__profession">Фронтенд-разработчик, 31 год</h4>
          <p className="about-me__text">
            Я&nbsp;родился в&nbsp;Ростовской области, закончил энергетический факультет РГУПС с&nbsp;красным дипломом.
            Живу и&nbsp;работаю в&nbsp;Невинномысске (Ставропольский край).
            У&nbsp;меня есть жена и&nbsp;сын.
            В&nbsp;свободное время занимаюсь фотографией, туризмом, сноубордингом, смотрю сериалы и&nbsp;читаю художественную литературу.
            Веб&#8209;разработкой увлекся при прохождении курса на&nbsp;платформе Яндекс.Практикум.
          </p>
          <ul className="about-me__links">
            <li className="about-me__links-item">
            <a href="https://github.com/Kerjanoid" className="about-me__link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            </li>
            <li className="about-me__links-item">
            <a href="https://t.me/Kerjanoid" className="about-me__link" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" src={myPhoto} alt="Фотография Вячеслава" />
      </div>
    </section>
  );
}

export default AboutMe;

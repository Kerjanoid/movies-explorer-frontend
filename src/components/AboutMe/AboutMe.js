import myPhoto from "../../images/my-photo.jpeg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="student" id={"student"}>
      <div className="student__title-container">
        <h2 className="student__title">Студента</h2>
      </div>
      <div className="student__info-container">
        <div className="student__info">
          <h3 className="student__name">Вячеслав</h3>
          <h4 className="student__profession">Фронтенд-разработчик, 31 год</h4>
          <p className="student__text">
            Я&nbsp;родился в&nbsp;Ростовской области, закончил энергетический факультет РГУПС с&nbsp;красным дипломом.
            Живу и&nbsp;работаю в&nbsp;Невинномысске (Ставропольский край).
            У&nbsp;меня есть жена и&nbsp;сын.
            В&nbsp;свободное время занимаюсь фотографией, туризмом, сноубордингом, смотрю сериалы и&nbsp;читаю художественную литературу.
            Веб&#8209;разработкой увлекся при прохождении курса на&nbsp;платформе Яндекс.Практикум.
          </p>
          <ul className="student__links">
            <li className="student__links-item">
            <a href="https://github.com/Kerjanoid" className="student__link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            </li>
            <li className="student__links-item">
            <a href="https://t.me/Kerjanoid" className="student__link" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
            </li>
          </ul>
        </div>
        <img className="student__photo" src={myPhoto} alt="Фотография Вячеслава" />
      </div>
    </section>
  );
}

export default AboutMe;

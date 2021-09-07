import './MoviesCard.css';
import pic1 from "../../images/pic__COLOR_pic.jpg"

function MoviesCard() {
  return (
    <div className="card">
      <img className="card__picture" src={pic1}  alt="Постер фильма" />
      <div className="card__description">
        <p className="card__titel">33 слова о дизайне</p>
        <button className="card__like-button"/>
      </div>
    </div>
  );
}

export default MoviesCard;

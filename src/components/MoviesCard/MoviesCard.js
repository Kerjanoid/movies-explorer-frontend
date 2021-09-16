import './MoviesCard.css';
import pic1 from "../../images/pic__COLOR_pic.jpg";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({movie}) {
  const [isLiked, setIsLiked] = useState(false);
  const { pathname } = useLocation();

  const handleLikeClick = () => {
    setIsLiked(!isLiked)
  }

  const handlePictureClick = () => {
    window.open(`${movie.trailerLink}`, 'trailer');
  }

  return (
    <div className="card">
      <img className="card__picture"
        src={`https://api.nomoreparties.co${movie.image.url}`}
        alt={`Постер фильма "${movie.nameRU}"`}
        onClick={handlePictureClick}/>
      <div className="card__description">
        <h2 className="card__titel">{movie.nameRU}</h2>
        {pathname === "/movies" ?
          <button onClick={handleLikeClick} className={`card__like-button ${isLiked ? "card__like-button_liked" : ""}`}/>
          :
          <button className="card__delete-button"/>
        }
        <p className="card__duration">{movie.duration}м</p>
      </div>
    </div>
  );
}

export default MoviesCard;

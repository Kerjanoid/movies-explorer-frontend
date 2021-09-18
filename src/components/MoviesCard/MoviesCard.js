import './MoviesCard.css';
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

  const timeCalculating = `${Math.floor(movie.duration/60)}ч ${movie.duration%60}м`

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
        <p className="card__duration">{timeCalculating}</p>
      </div>
    </div>
  );
}

export default MoviesCard;

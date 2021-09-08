import './MoviesCard.css';
import pic1 from "../../images/pic__COLOR_pic.jpg";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard() {
  const [isLiked, setIsLiked] = useState(false);
  const { pathname } = useLocation();

  const handleLikeClick = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div className="card">
      <img className="card__picture" src={pic1}  alt="Постер фильма" />
      <div className="card__description">
        <h2 className="card__titel">33 слова о дизайне</h2>
        {pathname === "/movies" ?
          <button onClick={handleLikeClick} className={`card__like-button ${isLiked ? "card__like-button_liked" : ""}`}/>
          :
          <button className="card__delete-button"/>
        }
        <p className="card__duration">1ч 42м</p>
      </div>
    </div>
  );
}

export default MoviesCard;

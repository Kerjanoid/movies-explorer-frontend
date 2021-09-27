import './MoviesCard.css';
import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrenUserContext";

function MoviesCard({ movie, saveMovies, deleteSavedMoivies, savedMovies, isSaved }) {
  const { pathname } = useLocation();
  const [isLiked, setIsLiked] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  const thisMovie = {
    country: movie.country || " ",
    director: movie.director || " ",
    duration: movie.duration || 0,
    year: movie.year || " ",
    description: movie.description || " ",
    image: isSaved ? movie.image : `https://api.nomoreparties.co${movie.image.url}`,
    trailer: isSaved ? movie.trailer : movie.trailerLink,
    thumbnail:  isSaved ? movie.thumbnail : `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
    movieId: isSaved ? movie._id : movie.id,
    nameRU: movie.nameRU || " ",
    nameEN: movie.nameEN || " ",
  }

  const handleLike = () => {
    setIsLiked(true)
    saveMovies(thisMovie)
  }

  const handleDeleteLike = () => {
    setIsLiked(false)
    const searchMovie = savedMovies.find(item => item.movieId === movie.id)
    deleteSavedMoivies(searchMovie._id)
  }

  const handleDeleteCard = () => {
    deleteSavedMoivies(movie._id)
  }

  const handlePictureClick = () => {
    window.open(`${movie.trailerLink}`, 'trailer');
  }

  const timeCalculating = `${Math.floor(movie.duration/60)}ч ${movie.duration%60}м`

  return (
    <div className="card">
      <img className="card__picture"
        src={isSaved ? movie.image : `https://api.nomoreparties.co${movie.image.url}`}
        alt={`Постер фильма "${movie.nameRU}"`}
        onClick={handlePictureClick}/>
      <div className="card__description">
        <h2 className="card__titel">{movie.nameRU}</h2>
        {pathname === "/movies" ?
          isLiked ? <button onClick={handleDeleteLike} className="card__like-button card__like-button_liked" /> :
            <button onClick={handleLike} className="card__like-button" />
          : isSaved ? <button className="card__delete-button" onClick={handleDeleteCard} /> : <></> }
        <p className="card__duration">{timeCalculating}</p>
      </div>
    </div>
  );
}

export default MoviesCard;

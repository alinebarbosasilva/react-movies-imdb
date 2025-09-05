import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie, onToggleFavorite, isFavorite }) => {
  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(movie);
  };

  return (
    <Link to={`/movie/${movie.imdbID}`} className="movie-card">
      <img src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"} alt={movie.Title} />
      <div className="movie-card-content">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
      <button className="favorite-button" onClick={handleFavoriteClick}>
        {isFavorite(movie.imdbID) ? "★" : "☆"}
      </button>
    </Link>
  );
};

export default MovieCard;

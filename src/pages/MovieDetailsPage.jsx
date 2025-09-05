import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api/omdb";
import Loading from "../components/Loading";
import { useFavorites } from "../hooks/useFavorites";
import "./MovieDetailsPage.css";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch {
        setError("Erro ao buscar detalhes do filme");
      }
      setLoading(false);
    };
    fetchDetails();
  }, [id]);

  const handleToggleFavorite = () => {
    if (isFavorite(movie.imdbID)) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie);
    }
  };

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <div className="movie-details">
      <img src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"} alt={movie.Title} />
      <div className="movie-details-content">
        <h1>{movie.Title}</h1>
        <p><strong>Ano:</strong> {movie.Year}</p>
        <p><strong>Diretor:</strong> {movie.Director}</p>
        <p><strong>Elenco:</strong> {movie.Actors}</p>
        <p><strong>Sinopse:</strong> {movie.Plot}</p>
        <p><strong>Avaliação:</strong> {movie.imdbRating}</p>
        <button onClick={handleToggleFavorite} className="favorite-button-details">
          {isFavorite(movie.imdbID) ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
        </button>
      </div>
    </div>
  );
};

export default MovieDetailsPage;

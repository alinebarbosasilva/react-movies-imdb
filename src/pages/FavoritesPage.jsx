import React from "react";
import { useFavorites } from "../hooks/useFavorites";
import MovieCard from "../components/MovieCard";

const FavoritesPage = () => {
  const { favorites, removeFavorite, isFavorite } = useFavorites();

  return (
    <div>
      <h1>Filmes Favoritos</h1>
      {favorites.length === 0 ? <p>Nenhum filme favoritado.</p> : null}
      <div className="movies-grid">
        {favorites.map(movie => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onToggleFavorite={() => removeFavorite(movie.imdbID)}
            isFavorite={isFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;

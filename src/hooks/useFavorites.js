import { useState, useEffect } from "react";

const getInitialFavorites = () => {
  const stored = localStorage.getItem("favorites");
  return stored ? JSON.parse(stored) : [];
};

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(getInitialFavorites());

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => {
    if (!favorites.find(f => f.imdbID === movie.imdbID)) {
      setFavorites(prevFavorites => [...prevFavorites, movie]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(prevFavorites => prevFavorites.filter(f => f.imdbID !== id));
  };

  const isFavorite = (id) => favorites.some(f => f.imdbID === id);

  return { favorites, addFavorite, removeFavorite, isFavorite };
};

import React, { useState, useEffect } from "react";
import { searchMovies } from "../api/omdb";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import { useFavorites } from "../hooks/useFavorites";
import "./SearchPage.css";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const searchQuery = query || "movie";
      const data = await searchMovies(searchQuery, page);
      if (data.Response === "True") {
        setMovies(data.Search);
        setTotalPages(Math.ceil(data.totalResults / 10));
      } else {
        setMovies([]);
        setTotalPages(1);
        setError(data.Error);
      }
    } catch (err) {
      setError("Erro ao buscar filmes");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchMovies();
  };

  const handleToggleFavorite = (movie) => {
    if (isFavorite(movie.imdbID)) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div>
      <h1>Buscar Filmes</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Digite o nome do filme" />
        <button type="submit">Buscar</button>
      </form>

      {loading && <Loading />}
      {error && <p>{error}</p>}

      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onToggleFavorite={handleToggleFavorite}
            isFavorite={isFavorite}
          />
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default SearchPage;

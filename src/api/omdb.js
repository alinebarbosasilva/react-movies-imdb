import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query, page = 1) => {
  const response = await axios.get(BASE_URL, {
    params: {
      s: query,
      page,
      apikey: API_KEY,
    },
  });
  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(BASE_URL, {
    params: {
      i: id,
      plot: "full",
      apikey: API_KEY,
    },
  });
  return response.data;
};

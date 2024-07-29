import axios from 'axios';

const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDZmNmM4YmI1YzMyNzMzZTVjOTQzZjc0NWI5Yzk3NyIsIm5iZiI6MTcyMjA5Nzc0NS43MDkwMjYsInN1YiI6IjY2YTUxOThlOTQ3ZDM1OWI5MTkxMjdlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DRXNESVAnxLlzxV1dacSjvwdDYv4ABjPnopZ0n4KiE0';
const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';
const IMAGE_SIZE = 'w500';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `${API_KEY}`,
  },
});

export const fetchTrendingMovies = async () => {
  try {
    const response = await api.get('/trending/movie/day');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const fetchMovies = async (query) => {
  try {
    const response = await api.get('/search/movie', {
      params: { query, include_adult: false, language: 'en-US', page: 1 },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchImageUrl = (path) => {
  const defaultImg =
    'https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png';
  return path ? `${BASE_IMAGE_URL}${IMAGE_SIZE}${path}` : defaultImg;
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const getMovieCast = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}/credits`);
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error;
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}/reviews`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};

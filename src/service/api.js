import axios from 'axios';

const API_KEY = 'a06f6c8bb5c32733e5c943f745b9c977';

export const fetchMovies = async () => {
  const response = await axios.get('https://api.themoviedb.org/3/movie', {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  return response.data;
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    {
      headers: { Authorization: `Bearer ${API_KEY}` },
    }
  );
  return response.data;
};

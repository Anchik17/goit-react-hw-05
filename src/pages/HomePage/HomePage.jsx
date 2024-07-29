import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../service/api';
import MovieList from '../../components/MovieList/MovieList';
import { Outlet } from 'react-router-dom';
import s from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.log('Error fetching trending movies:', error);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <div className={s.container}>
      <h2 className={s.mainTitle}>Trending today</h2>
      <MovieList movies={movies} />
      <Outlet />
    </div>
  );
};

export default HomePage;

import { useEffect, useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { useLocation, useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        try {
          const searchResult = await fetchMovies(query);
          setMovies(searchResult.results);
        } catch (error) {
          console.error('Error searching movies', error);
        }
      };
      fetchMovies();
    }
  }, [query]);

  const handleSearch = (newQuery) => {
    setSearchParams({ query: newQuery });
  };
  return (
    <div>
      <SearchForm onSearch={handleSearch} initialQuery={query} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;

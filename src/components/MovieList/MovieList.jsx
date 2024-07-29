import { Link, useLocation } from 'react-router-dom';
import { fetchImageUrl } from '../../service/api';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.item}>
          <Link
            to={`/movies/${movie.id}`}
            className={s.link}
            state={{ from: location }}
          >
            <img
              src={fetchImageUrl(movie.poster_path)}
              className={s.image}
              alt={movie.title}
            />
            <h3 className={s.title}>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

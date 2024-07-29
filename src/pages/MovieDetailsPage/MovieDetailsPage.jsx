import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchImageUrl, getMovieDetails } from '../../service/api';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/movies');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={s.mainContainer}>
      <Link to={goBackRef.current} className={s.goBackButton}>
        Go back!
      </Link>

      {movie && (
        <div className={s.container}>
          <div className={s.imgBlock}>
            <img
              src={fetchImageUrl(movie.poster_path)}
              alt={movie.title}
              className={s.image}
            />
          </div>
          <div>
            <h1 className={s.title}>{movie.title}</h1>
            <p className={s.text}>{movie.overview}</p>
            <p className={s.text}>{movie.status}</p>
            <p className={s.text}>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
          </div>
          <Link
            to='cast'
            className={s.linkCast}
            state={{ from: location.state?.from }}
          >
            Cast
          </Link>
          <Link
            to='reviews'
            className={s.linkReviews}
            state={{ from: location.state?.from }}
          >
            Reviews
          </Link>
          <Suspense fallback={<h2>LOADING...</h2>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;

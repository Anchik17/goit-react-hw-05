import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../service/api';
import s from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, SetCast] = useState([]);
  const defaultImg =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAaJS0dnDYQ5NkVr30LWhCjQoMLtm6BC0TDA&s';

  useEffect(() => {
    async function fetchCasts() {
      try {
        const casts = await getMovieCast(movieId);
        SetCast(casts);
        console.log(casts);
      } catch (error) {
        {
          console.error('Error fetching movie casts:', error);
        }
      }
    }
    fetchCasts();
  }, [movieId]);

  return (
    <div className={s.container}>
      {cast.map((actor) => (
        <div key={actor.id} className={s.actor}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : defaultImg
            }
            alt={actor.name}
            className={s.image}
          />
          <p className={s.name}>{actor.name}</p>
          <p className={s.character}>{actor.character}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCast;

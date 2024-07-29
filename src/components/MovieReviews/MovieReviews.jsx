import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../service/api';
import s from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, SetReviews] = useState([]);
  useEffect(() => {
    async function fetchReviews() {
      try {
        const reviews = await getMovieReviews(movieId);
        SetReviews(reviews);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <div className={s.container}>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id} className={s.review}>
            <h3 className={s.author}>{review.author}</h3>
            <p className={s.content}>{review.content}</p>
          </div>
        ))
      ) : (
        <p className={s.noReviews}>No reviews available.</p>
      )}
    </div>
  );
};

export default MovieReviews;

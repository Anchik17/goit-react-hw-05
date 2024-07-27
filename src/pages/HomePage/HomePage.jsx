import { Link, useLocation } from 'react-router-dom';

const HomePage = ({ movies = [] }) => {
  const location = useLocation();
  return (
    <div>
      <h2>Trending Today</h2>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={movie.id.toString()} state={location}></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

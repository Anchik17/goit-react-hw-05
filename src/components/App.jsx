import { Route, Routes } from 'react-router-dom';
// import HomePage from '../pages/HomePage/HomePage';
// import MoviesPage from '../pages/MoviesPage/MoviesPage';
// import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
// import MovieCast from './MovieCast/MovieCast';
// import MovieReviews from './MovieReviews/MovieReviews';
// import Header from './Header/Header';
import { lazy, Suspense } from 'react';
// import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));
const Header = lazy(() => import('./Header/Header'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<h2>Loading your component...</h2>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />

          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
            <Route path='cast' element={<MovieCast />} />
            <Route path='reviews' element={<MovieReviews />} />
          </Route>

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

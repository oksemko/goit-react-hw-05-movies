import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Navigation } from 'components/Navigation/Navigation';
import { HomePage } from 'components/app-pages/HomePage/HomePage';
import { Container } from 'components/Navigation/Navigation.styled';
import { Header } from './App.styled';

import MovieDetailedPage from 'components/app-pages/MovieDetailedPage/MovieDetailedPage';


const MoviesPage = lazy(() =>
  import('../app-pages/MoviesPage/MoviesPage')    /*-----> webpackChunkName: 'MoviePage' */
  );

const NotFound = lazy(() =>
  import('../app-pages/NotFound/NotFound')   /*-----> webpackChunkName: 'NotFoundPage' */
);


export function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Container>
        <Suspense fallback={<div>Loading ... 🧿</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="movies/:movieId/*" element={<MovieDetailedPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}




















// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

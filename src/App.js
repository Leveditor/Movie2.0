import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/index';
import Body from './Components/Home';
import MovieTopPage from './Components/Movies/MoviePages/TopMoviesPage';
import TopRatedPage from './Components/Movies/MoviePages/TopRatedPage';
import UpcomingPage from './Components/Movies/MoviePages/UpcomingPage';
import MovieDetails from './Components/Movies/MovieDetails';
import SerieDetails from './Components/Serie/SerieDetsils';
import PopularSerie from './Components/Serie/AllSeriePages/PopularSeriePage';
import TopRetedSerie from './Components/Serie/AllSeriePages/TopRatedPages';

export default function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
        <Routes>
            <Route path="/" element={<Body />} />

            <Route path="/top-movie-page" element={<MovieTopPage />} />
            <Route path="/top-rated-page" element={<TopRatedPage />} />
            <Route path="/up-coming-page" element={<UpcomingPage />} />

            <Route path="/movie-datails/:id" element={<MovieDetails />} />
            <Route path="/series-details/:id" element={<SerieDetails />} />

            <Route path="/popularSerie" element={<PopularSerie />} />
            <Route path="/topRetedSerie" element={<TopRetedSerie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

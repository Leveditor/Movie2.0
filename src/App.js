import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/index';
import Body from './Components/Home';
import MovieDetails from './Components/Movies/MovieDetails';
import SerieDetails from './Components/Serie/SerieDetsils';
import MovieTop from './Components/Movies/MoviePages/TopMovies';
import TopRated from './Components/Movies/MoviePages/TopRatedPage';
import Upcoming from './Components/Movies/MoviePages/UpcomingPage';
import PopularSerie from './Components/Serie/AllSeriePages/PopularSeriePage';
import TopRetedSerie from './Components/Serie/AllSeriePages/TopRatedPages';

export default function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
        <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/movie-datails/:id" element={<MovieDetails />} />
            <Route path="/series-details/:id" element={<SerieDetails />} />
            <Route path="/tops" element={<MovieTop />} />
            <Route path="/topRated" element={<TopRated />} />
            <Route path="/upComing" element={<Upcoming />} />

            <Route path="/popularSerie" element={<PopularSerie />} />
            <Route path="/topRetedSerie" element={<TopRetedSerie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/index';
import Body from './Components/Home';
import Details from './Components/Movies/MovieDetails';
import DetailsSerie from './Components/Serie/DetailsSerie';
import MovieTop from './Components/Movies/AllMoviesPages/MoviePage';
import TopRated from './Components/Movies/AllMoviesPages/TopRatedPage';
import Upcoming from './Components/Movies/AllMoviesPages/UpcomingPage';

export default function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
        <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/details-series/:id" element={<DetailsSerie />} />
            <Route path="/tops" element={<MovieTop />} />
            <Route path="/topRated" element={<TopRated />} />
            <Route path="/upComing" element={<Upcoming />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/index";
import Body from './Components/Home';
import Details from './Components/Movies/MovieDetails';
import MovieTop from "./Components/Movies/MoviePage";
import DetailsSerie from './Components/Serie/DetailsSerie';

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

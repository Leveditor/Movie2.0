import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import SliderButton from 'react-slick';
import settings from '../../SliderButton';
import { Link } from "react-router-dom";

export default function TopRatedSerie() {
  const [firstPage, SetFirstPage] = useState([]);
  const [secondPage, SetSecondPage] = useState([]);

  useEffect(() => {
    async function list() {
      const responseFirstPage = await api.get("/3/tv/top_rated?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=en-US&page=1",
        {}
      );

      const responseSecondPage = await api.get("/3/tv/top_rated?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=en-US&page=2",
        {}
      );

      SetFirstPage(responseFirstPage.data.results);
      SetSecondPage(responseSecondPage.data.results);
    }

    list();
  }, []);

  return (
    <>
      <div className="mt-8 p-8 pt-0">
        <div className="flex justify-between">
          <div className="pl-2 pb-2">
            <h1 className="text-2xl text-white pb-1 pl-1 border-l-4 border-sky-700">Top Rated Series</h1>
          </div>
          <div>
            <Link to="top-rated-page">
              <small className="pr-4 pl-4 bg-sky-700 text-white">SEE ALL</small>
            </Link>
          </div>
        </div>

        <SliderButton {...settings}>
          {firstPage.map((movie) => {
            return (
              <div className="p-1" key={movie.id}>
                <div>
                <Link to={`series-details/${movie.id}`}>
                  <div>
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="rounded-lg" alt={movie.title} />
                  </div>
                </Link>
                </div>
                <div className="flex justify-between">
                  <div>
                    <small className="pl-1 text-gray-400">
                      {movie.first_air_date}
                    </small>
                  </div>
                  <div>
                    <p className={movie.vote_average.toString().replace(".", "") > 70 ? 'text-green-400' : 'text-yellow-500'}>
                      {movie.vote_average.toString().replace(".", "")}%
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </SliderButton>
      </div>

      <div className="p-8 pt-0">
        <SliderButton {...settings}>
          {secondPage.map((movie) => {
            return (
              <div className="p-1" key={movie.id}>
                <div>
                <Link to={`series-details/${movie.id}`}>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      className="rounded-lg"
                      alt={movie.title} />
                  </div>
                </Link>
                </div>
                <div className="flex justify-between">
                  <div>
                    <small className="pl-1 text-gray-400">
                      {movie.first_air_date}
                    </small>
                  </div>
                  <div>
                    <p className="text-green-400 pr-4">
                      {movie.vote_average.toString().replace(".", "")}%
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </SliderButton>
      </div>
    </>
  );
}

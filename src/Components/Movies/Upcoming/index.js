import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../services/api";
import Slider from "react-slick";
import settings from "../../Button";

export default function Upcoming() {
  const [firstPage, SetFirstPage] = useState([]);
  const [secondPage, SetSecondPage] = useState([]);

  useEffect(() => {
    async function list() {
      const responseFirstPage = await api.get(
        "/3/movie/upcoming?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=en-US&page=1",
        {}
      );

      const responseSecondPage = await api.get(
        "/3/movie/upcoming?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=en-US&page=2",
        {}
      );

      SetFirstPage(responseFirstPage.data.results);
      SetSecondPage(responseSecondPage.data.results);
    }

    list();
  }, []);

  return (
    <>
      <div className="mt-2 p-8">
        <div className="flex justify-between">
          <div>
            <h1 className="text-white text-2xl pb-1 pl-1">Upcoming Premieres</h1>
          </div>
          <div>
            <Link to='upComing'>
              <small className="pr-2 text-white">See more</small>
            </Link>
          </div>
        </div>
        <Slider {...settings}>
          {firstPage.map((movie) => {
            return (
              <div className="p-1" key={movie.id}>
                <Link to={`details/${movie.id}`}>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="rounded-lg"
                      alt={movie.title}/>
                  </div>
                </Link>
                <small className="pl-1 text-gray-400">
                  {movie.release_date}
                </small>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="p-8 pt-0">
        <Slider {...settings}>
          {secondPage.map((movie) => {
            return (
              <div className="p-1" key={movie.id}>
                <Link to={`details/${movie.id}`}>
                  <div>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="rounded-lg"
                      alt={movie.title} />
                  </div>
                </Link>
                <small className="pl-1 text-gray-400">
                  {movie.release_date}
                </small>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

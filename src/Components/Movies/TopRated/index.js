import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../services/api";
import Slider from "react-slick";
import setting from "../../Button";

export default function TopRated() {
  const [firstPage, SetFirstPage] = useState([]);
  const [secondPage, SetSecondPage] = useState([]);

  useEffect(() => {
    async function list() {
      const responseFirstPage = await api.get(
        "/3/movie/top_rated?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=en-US&page=1",
        {}
      );

      const responseSecondPage = await api.get(
        "/3/movie/top_rated?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=en-US&page=2",
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
          <div className="pl-2 pb-2">
            <h1 className="text-white text-2xl pb-1 pl-1 border-l-4 border-sky-700">The most voted</h1>
          </div>
          <div>
            <Link to='topRated'>
              <small className="pr-4 pl-4 bg-sky-700 text-white">SEE ALL</small>
            </Link>
          </div>
        </div>
        <Slider {...setting}>
          {firstPage.map((movie) => {
            return (
              <div className="p-1" key={movie.id}>
                <Link to={`details/${movie.id}`}>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt={movie.title}
                      className="rounded-lg"
                    />
                  </div>
                </Link>
                <div className="flex justify-between">
                  <div>
                    <small className="pl-1 text-gray-400">
                      {movie.release_date}
                    </small>
                  </div>
                  <div>
                    <p
                      className={
                        movie.vote_average.toString().replace(".", "") > 70
                          ? "text-green-400"
                          : "text-yellow-500"
                      }
                    >
                      {movie.vote_average.toString().replace(".", "")}%
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="p-8 pt-0">
        <Slider {...setting}>
          {secondPage.map((movie) => {
            return (
              <div className="p-1" key={movie.id}>
                <Link to={`details/${movie.id}`}>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt={movie.title}
                      className="rounded-lg"
                    />
                  </div>
                </Link>
                <div className="flex justify-between">
                  <div>
                    <small className="pl-1 text-gray-400">
                      {movie.release_date}
                    </small>
                  </div>
                  <div>
                    <p
                      className={
                        movie.vote_average.toString().replace(".", "") > 70
                          ? "text-green-400"
                          : "text-yellow-500"
                      }
                    >
                      {movie.vote_average.toString().replace(".", "")}%
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

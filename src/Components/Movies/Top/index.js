import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../services/api";
import Slider from "react-slick";
import settings from "../../Button";

export default function Top() {
  const [movies3, SetMovies] = useState([]);

  useEffect(() => {
    async function list() {
      const response = await api.get(
        "/3/movie/popular?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=en-US&page=1",
        {}
      );

      SetMovies(response.data.results);
    }

    list();
  }, []);

  return (
    <>
      <div className="mt-12 p-8">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl text-white pb-1 pl-1">Most Popular</h1>
          </div>
          <div>
            <Link to='tops'>
              <small className="pr-2 text-white">See more</small>
            </Link>
          </div>
        </div>
        <Slider {...settings}>
          {movies3.map((movie) => {
            return (
              <div className="p-1" key={movie.id}>
                <Link to={`details/${movie.id}`}>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      className="rounded-lg"
                      alt={movie.title} />
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

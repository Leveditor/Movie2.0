import React, { useEffect, useState } from 'react';
import ButtonPgaes from '../../../NextPageButton';
import { Link } from 'react-router-dom';
import api from '../../../../services/api';

export default function TopRated() {
  const [allmovies, SetAllMovies] = useState([]);
  const [page] = useState(1);

  useEffect(() => {
    async function list() {
      const allMovie = await api.get(`/3/movie/top_rated?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=en-US&page=${page}`,
        {}
      );

      SetAllMovies(allMovie.data.results);
    }

    list();
  }, [page]);

  return (
    <>
      <div className="mt-12 p-8">
        <div>
          <h1 className="text-2xl text-white pb-1 pl-1">Most Popular</h1>
        </div>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2">
        {allmovies.map((movie) => {
          return (
            <div className="p-5" key={movie.id}>
              <Link to={`/movie-datails/${movie.id}`}>
                <div>
                  <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    className="rounded-lg w-56" alt={movie.title} />
                </div>
              </Link>
              <div className="flex justify-between">
                <div>
                  <small className="text-gray-400">{movie.release_date}</small>
                </div>
                <div>
                  <p className={movie.vote_average.toString().replace(".", "") > 70
                        ? "text-green-400" : "text-yellow-500"}>
                    {movie.vote_average.toString().replace(".", "")}%
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        </div>

         <ButtonPgaes />
      </div>
    </>
  );
}

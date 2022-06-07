import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../services/api";

export default function MovieTop() {
  const [allmovies, SetAllMovies] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    async function list() {
      const allMovie = await api.get(`/3/movie/popular?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=en-US&page=${pagina}`,
        {}
      );

      SetAllMovies(allMovie.data.results);
    }

    list();
  }, [pagina]);

  function handleNext() {
    setPagina(pagina + 1);
  }

  function handleBack() {
    setPagina(pagina - 1);
  }

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
              <Link to={`/details/${movie.id}`}>
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

          <div className="flex justify-center items-center space-x-1">
            <button onClick={handleBack} className="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
            </button>
          
            <button onClick={handleNext} className="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </button>
          </div>
      </div>

      
    </>
  );
}

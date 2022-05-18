import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api";
import People from "./People";
import Similar from "./SimilarMovies";
import Trailer from "./TrailerMovie";

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(
        `/3/movie/${id}?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=en-US`
      );

      setMovie(response.data);
    }

    loadFilme();
  }, [id]);

  const styleBack = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
      <div style={styleBack}>
        <Trailer />
      </div>

      <div className="flex ml-12 mt-10">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            className="rounded-lg teste5"
            alt={movie.title}
          />
        </div>
        <div>
          <h1 className="text-white pl-5 pt-8 text-4xl">
            {movie.original_title}
          </h1>

          <div className="pl-5 pt-1">
            {movie.genres
              ? movie.genres.map((genre) => (
                  <span className="text-white text-md"> • {genre.name}</span>
                ))
              : []}
          </div>

          <p className="text-gray-400 pl-5 pt-1">{movie.release_date}</p>
          <p className="text-white pl-5 pt-4">{movie.tagline}</p>
          <p className="text-white pl-5 pt-4">{movie.overview}</p>
          <People />
          <Similar />
        </div>
        
      </div>
     
    </>
  );
}

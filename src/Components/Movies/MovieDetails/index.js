import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../services/api';
import People from './MovieActors';
import Similar from './SimilarMovies';
import Trailer from './TrailerMovie';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setSerie] = useState({});

      useEffect(() => {
        async function loadSerie () {
          const serie = await api.get(`/3/movie/${id}?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=en-US`);

          setSerie(serie.data);
        }

        loadSerie();
      }, [id]);

  const styleTrailer = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
      <div style={styleTrailer}>
        <Trailer />
      </div>

      <div className="sm:grid grid-flow-col sm:ml-12 mt-10 ml-2">
          <div>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="rounded-lg imgCard" alt={movie.title} />
          </div>
        <div>
          <h1 className="text-white sm:pl-5 pt-8 text-4xl">{movie.original_title}</h1>

          <div className="sm:pl-5 pt-1">
            {movie.genres ? movie.genres.map((genre) => (
                <span className="text-white text-md" key={genre.id}> • {genre.name}</span>
                )): []}
          </div>

          <p className="text-gray-400 sm:pl-5 pt-1 ">{movie.release_date}</p>
          <p className="text-white sm:pl-5 pt-4">{movie.tagline}</p>
          <p className="text-white sm:pl-5 pr-3 pt-4 text-justify">{movie.overview}</p>
          <People />
          <Similar />
        </div>
      </div>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../services/api';
import MovieActors from './SerieActors';
import Similar from './SimilarSerie';
import Trailer from './TrailerSeries';

export default function SerieDetails() {
  const { id } = useParams();
  const [serie, setDetailsSerie] = useState({});

  useEffect(() => {
    async function loadFilme() {
      const serieDetails = await api.get(`/3/tv/${id}?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=en-US`);

      setDetailsSerie(serieDetails.data);
    }

    loadFilme();
  }, [id]);

  const styleTrailer = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${serie.backdrop_path})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
      <div style={styleTrailer} className='trailer'>
          <Trailer />
      </div>

      <div className="sm:grid grid-flow-col  sm:ml-12 mt-10 ml-2">
        <div>
          <img src={`https://image.tmdb.org/t/p/original/${serie.poster_path}`} className="rounded-lg imgCard pl-10 sm:pl-0" alt={serie.title}/>
        </div>
        <div>
          <h1 className="text-white sm:pl-5 pl-2 pt-8 text-4xl">{serie.original_name}</h1>
          <div className="sm:pl-5 pl-2 pt-1">
            {serie.genres ? serie.genres.map((genre) => (
                  <span className="text-white text-md" key={genre.id}> • {genre.name}</span>
              )) : []}
          </div>

          <p className="text-gray-400 sm:pl-5 pl-2 pt-1">{serie.first_air_date}</p>
          <p className="text-white sm:pl-5 pl-2 pt-4">{serie.tagline}</p>
          <p className="text-white sm:pl-5 pl-2 pr-3 pt-4 text-justify">{serie.overview}</p>
          
          <MovieActors />
          <Similar />
        </div>
      </div>
    </>
  );
}

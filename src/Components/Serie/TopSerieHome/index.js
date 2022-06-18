import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import SliderButton from 'react-slick';
import settings from '../../SliderButton';

export default function Serie() {
  const [serie, SetMovies] = useState([]);

  useEffect(() => {
    async function list() {
      const response = await api.get("/3/tv/popular?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=en-US&page=1",
        {}
      );

      SetMovies(response.data.results);
    }

    list();
  }, []);

  return (
    <>
      <div className="mt-8 p-8 pt-0">
        <div className="flex justify-between">
          <div className="pl-2 pb-2">
            <h1 className="text-2xl text-white pb-1 pl-1 border-l-4 border-sky-700">Popular series</h1>
          </div>
          <div>
            <Link to='top-serie-page'>
              <small className="pr-4 pl-4 bg-sky-700 text-white">SEE ALL</small>
            </Link>
          </div>
        </div>

        <SliderButton {...settings}>
          {serie.map((series) => {
            return (
              <div className="p-1" key={series.id}>
                <Link to={`series-details/${series.id}`}>
                  <div>
                    <img src={`https://image.tmdb.org/t/p/original/${series.poster_path}`} className="rounded-lg" alt={series.title} />
                  </div>
                </Link>
                <div className="flex justify-between">
                  <div>
                    <small className="pl-1 text-gray-400">{series.first_air_date}</small>
                  </div>
                  <div>
                    <p className={series.vote_average.toString().replace(".", "") > 70 ? 'text-green-400' : 'text-yellow-500'}>
                      {series.vote_average.toString().replace(".", "")}%
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

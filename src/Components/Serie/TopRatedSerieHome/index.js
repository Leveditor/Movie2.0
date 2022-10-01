import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import SliderButton from 'react-slick';
import settings from '../../SliderButton';
import { Link } from 'react-router-dom';
import { i18n } from '../../../translate/i18n';

const I18N_STORAGE_KEY = 'i18nextLng';
export default function TopRatedSerie() {
  const [firstPage, SetFirstPage] = useState([]);
  const [secondPage, SetSecondPage] = useState([]);
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));

  useEffect(() => {
    async function list() {
      const responseFirstPage = await api.get(`/3/tv/top_rated?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=${language}&page=1`,
        {}
      );

      const responseSecondPage = await api.get(`/3/tv/top_rated?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=${language}&page=2`,
        {}
      );

      SetFirstPage(responseFirstPage.data.results);
      SetSecondPage(responseSecondPage.data.results);
    }

    list();
  }, [language]);

  return (
    <>
      <div className="mt-8 p-8 pt-0">
        <div className="flex justify-between flex-wrap">
          <h1 className="text-white text-2xl pb-1 pl-1 border-l-4 border-sky-700">{i18n.t('series.topRated')}</h1>
          <Link to="top-rated-serie-page">
            <small className="pr-4 pl-4 bg-sky-700 text-white">{i18n.t('seeAll')}</small>
          </Link>
        </div>

        <SliderButton {...settings}>
          {firstPage.map((series) => {
            return (
              <div className="p-1" key={series.id}>
                <Link to={`series-details/${series.id}`}>
                    <img src={`https://image.tmdb.org/t/p/original/${series.poster_path}`} className="rounded-lg" alt={series.title} />
                </Link>
                <div className="flex justify-between">
                  <div>
                    <small className="pl-1 text-gray-400">{series.first_air_date}</small>
                  </div>
                  <div className='flex items-center text-yellow-500 pr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <p>{series.vote_average}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </SliderButton>
      </div>

      <div className="p-8 pt-0">
        <SliderButton {...settings}>
          {secondPage.map((series) => {
            return (
              <div className="p-1" key={series.id}>
                <div>
                <Link to={`series-details/${series.id}`}>
                  <div>
                    <img src={`https://image.tmdb.org/t/p/original/${series.poster_path}`} className="rounded-lg" alt={series.title} />
                  </div>
                </Link>
                </div>
                <div className="flex justify-between">
                  <div>
                    <small className="pl-1 text-gray-400">{series.first_air_date}</small>
                  </div>
                  <div className='flex items-center text-yellow-500 pr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <p>{series.vote_average}</p>
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

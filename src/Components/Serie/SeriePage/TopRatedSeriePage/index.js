import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonPage from '../../../NextPageButton';
import api from '../../../../services/api';
import { i18n } from '../../../../translate/i18n';

const I18N_STORAGE_KEY = 'i18nextLng';
export default function PopularSerie({ handleNext, handleBack }) {
  const [allSeries, SetAllSeries] = useState([]);
  const [page, setPage] = useState(1);
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));

  useEffect(() => {
    async function list() {
      const allSeries = await api.get(`/3/tv/top_rated?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=${language}&page=${page}`,
        {}
      );

      SetAllSeries(allSeries.data.results);
    }

    list();
  }, [page,language]);

  return (
    <>
      <div className="mt-12 p-8">
        <div>
          <h1 className="text-2xl text-white pb-1 pl-1">{i18n.t('series.topRated')}</h1>
        </div>
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2">
            {allSeries.map((serie) => {
            return (
              <div className="p-5" key={serie.id}>
                <Link to={`/series-details/${serie.id}`}>
                    <div>
                    <img src={`https://image.tmdb.org/t/p/original/${serie.poster_path}`} className="rounded-lg" alt={serie.title} />
                    </div>
                </Link>
                <div className="flex justify-between">
                  <div>
                    <small className="pl-1 text-gray-400">{serie.first_air_date}</small>
                  </div>
                  <div className='flex items-center text-yellow-500 pr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <p>{serie.vote_average}</p>
                  </div>
                </div>
              </div>
            );
            })}
        </div>

        <ButtonPage setPage={setPage} page={page} handleNext={handleNext} handleBack={handleBack}/>
      </div>
    </>
  );
}

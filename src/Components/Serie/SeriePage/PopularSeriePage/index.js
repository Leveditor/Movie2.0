import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonPage from '../../../NextPageButton';
import api from '../../../../services/api';

export default function PopularSerie({ handleNext, handleBack }) {
  const [allSeries, SetAllSeries] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function list() {
      const allSeries = await api.get(`/3/tv/popular?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=en-US&page=${page}`,
        {}
      );

      SetAllSeries(allSeries.data.results);
    }

    list();
  }, [page]);

  return (
    <>
      <div className="mt-12 p-8">
        <div>
          <h1 className="text-2xl text-white pb-1 pl-1">Popular series</h1>
        </div>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2">
        {allSeries.map((serie) => {
          return (
            <div className="p-5" key={serie.id}>
              <Link to={`/series-details/${serie.id}`}>
                <div>
                  <img src={`https://image.tmdb.org/t/p/original/${serie.poster_path}`} className="rounded-lg w-56" alt={serie.title} />
                </div>
              </Link>
              <div className="flex justify-between">
                <div>
                  <small className="text-gray-400">{serie.release_date}</small>
                </div>
                <div>
                  <p className={serie.vote_average.toString().replace(".", "") > 70
                        ? "text-green-400" : "text-yellow-500"}>
                    {serie.vote_average.toString().replace(".", "")}%
                  </p>
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

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonPage from '../../../NextPageButton';
import api from '../../../../services/api';

export default function TopRatedPage({ handleNext, handleBack }) {
  const [allmovies, SetAllMovies] = useState([]);
  const [page, setPage] = useState(1);

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
                      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="rounded-lg" alt={movie.title} />
                    </div>
                  </Link>
                  <div className="flex justify-between">
                    <div>
                      <small className="pl-1 text-gray-400">{movie.release_date}</small>
                    </div>
                    <div className='flex items-center text-yellow-500 pr-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <p>{movie.vote_average}</p>
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

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../../services/api';

const I18N_STORAGE_KEY = 'i18nextLng';
export default function Trailer() {
    const { id } = useParams();
    const [videos, setVideos] = useState({});
    const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));

    useEffect(() => {
      async function loadFilme() {
        const videos = await api.get(`/3/movie/${id}/videos?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=${language}`);
        
        setVideos(videos.data.results[0]);
      }

      loadFilme();
    }, [id, language]);

  return(
      <>
        <div className="flex justify-center pt-10">
          <iframe className="w-4/5 rounded-lg" height="500" src={`https://www.youtube.com/embed/${videos.key}`}
            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </>
  )
}

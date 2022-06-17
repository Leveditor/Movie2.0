import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import api from '../../services/api';


export default function Search() {
  const [movies, SetMovies] = useState([]);
  const [form, setForm] = useState('');


  useEffect(() => {
    async function list() {
      const response = await api.get(`/3/search/movie?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=en-US&query=${form}&page=1&include_adult=false`,
        {}
      );

      console.log(response.data.results);
    }

    list();
  }, []);

  const handleSubmit = (evt) => {
     
    }
    
  return (
    <>
    <form onSubmit={handleSubmit} >
        <input type="text" value={form} onChange={e => setForm(e.target.value)}/>
        <p className='text-white'><input type="submit" value="Submit" /></p>
    </form>
    </>
  );
}

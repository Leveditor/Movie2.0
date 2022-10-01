import { Fragment, useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { useParams } from 'react-router-dom';
import api from '../../../../services/api';
import { i18n } from '../../../../translate/i18n';

const I18N_STORAGE_KEY = 'i18nextLng';
export default function SimilarSerie() {
  const [open, setOpen] = useState(false);
  const [similarSerie, setSimilarSerie] = useState([]);
  const { id } = useParams();
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    async function loadSimilarSerie() {
      const similarTitle = await api.get(`/3/tv/${id}/similar?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=${language}`);

      setSimilarSerie(similarTitle.data);
    }

    loadSimilarSerie();
  }, [id, language]);
  
  return (
    <>
      <button className="ml-5 mt-5 pl-5 pr-5 bg-red-900 text-white" onClick={() => setOpen(true)}>
        {i18n.t('similar')}
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0"
            enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 ">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="flex justify-between">
                      <div>
                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                          {i18n.t('similar')}
                        </Dialog.Title>
                      </div>
                      <div>
                        <button onClick={() => setOpen(false)}>X</button>
                      </div>
                    </div>
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:text-left">
                        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
                          {similarSerie.results ? similarSerie.results.map((serie) => (
                              <div className="w-36 pl-5 pt-5" key={serie.id}>
                                <Link to={`/series-details/${serie.id}`} onClick={() => setOpen(false)}>
                                    <img src={`https://image.tmdb.org/t/p/original/${serie.poster_path}`} className="rounded-lg" alt={serie.title}/>
                                    <small>{serie.first_air_date}</small>   
                                </Link>
                              </div>
                          )) : []}
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

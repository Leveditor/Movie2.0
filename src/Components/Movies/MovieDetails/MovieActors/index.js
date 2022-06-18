import { Fragment, useRef, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import api from '../../../../services/api';
import { useParams } from 'react-router-dom';

export default function MovieActors() {
  const [open, setOpen] = useState(false);
  const [actors, setActors] = useState({});
  const { id } = useParams();

  const cancelButtonRef = useRef(null);

    useEffect(() => {
      async function loadFilme() {
        const peopleMovie = await api.get(`/3/movie/${id}/credits?api_key=5419518a2cef35d1e6fa80c720b89ae7&language=en-US`);

        setActors(peopleMovie.data);
      }

      loadFilme();
    }, [id]);
  
  return (
    <>
      <button className="ml-5 mt-5 pl-5 pr-5 bg-green-700 text-white mb-5" onClick={() => setOpen(true)}>
        See Cast
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
                enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 ">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="flex justify-between">
                      <div>
                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900" >
                          Cast
                        </Dialog.Title>
                      </div>
                      <div>
                        <button onClick={() => setOpen(false)}>X</button>
                      </div>
                    </div>
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:text-left">
                        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
                          {actors.cast ? actors.cast.map((actor) => (
                              <div className="w-36 pl-5 pt-5">
                                <img src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} className="rounded-lg w-72" alt={actor.name} />

                                {actor.profile_path == null ? ("") : (
                                  <p className="text-xs">{actor.name}</p>
                                )}
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

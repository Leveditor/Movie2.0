import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { i18n } from '../../../translate/i18n';

const navigationSerie = [
    {id: 1, name: `${i18n.t('series.popular')}`, href:'/top-serie-page'},
    {id: 2, name: `${i18n.t('series.topRated')}`, href:'/top-rated-serie-page'},
];

export default function MenuSerie() {
    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center rounded-md text-lg px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                        {i18n.t('header.serie')}
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                </div>
                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">

                    <Menu.Items className="origin-top-right right-0 sm:origin-top-left sm:left-0 absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {navigationSerie.map((item) => (
                                <Menu.Item key={item.id}>
                                    <Link to={item.href} className='text-gray-700 block px-4 py-2 text-sm'>
                                        {item.name}
                                    </Link>
                                </Menu.Item>
                            ))}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}
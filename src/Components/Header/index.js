import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import MenuMovie from './DropDownMovie';
import MenuSerie from './DropDownSerie';
import { i18n } from '../../translate/i18n';
import React, { useState } from 'react';
import usa from './eua.png'
import bra from './brasil.png'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const I18N_STORAGE_KEY = 'i18nextLng';
const handleSelectChange = event => {
  localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
  
  window.location.reload();
}


export default function Header() {

  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));

  
 
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                      <Link to='/' className={classNames('text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-lg font-medium')}>
                          {i18n.t('header.home')}
                      </Link>

                      <MenuMovie />
                      <MenuSerie />
                      
                      
                  </div>
                </div>
                
              </div>
    
              { language === 'en-US' ? <img src={usa} /> : <img src={bra} /> }
              <select onChange={handleSelectChange} value={language} className='bg-gray-800 text-white'>
                <option value='pt-BR'>Português</option>
                <option value='en-US'>English</option>
              </select>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to='/' className={classNames('text-gray-300 hover:bg-gray-700 hover:text-white',
                   'px-3 py-2 rounded-md text-lg font-medium')}>{i18n.t('titles.home')}</Link>
              <MenuMovie />
              <MenuSerie />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';

const HomeCallToAction = () => {
  return (
    <div>
      <header className='md:h-64 h-96 bg-blue-600 mb-0'>
        <div className='content flex'>
          <div className='md:w-2/3 w-full md:px-0 px-3'>
            <h1 className='text-5xl md:text-left text-center font-light pt-7 text-white'>
              Find your dream home
            </h1>
            <form action='POST' className='flex items-center w-full'>
              <div className='search-div relative w-full'>
                <input
                  className='w-full rounded-tl-sm rounded-bl-sm py-2.5 pl-11 mt-7 text-sm text-gray-300 outline-none'
                  placeholder='Search for your home'
                  type='text'
                />
                <div className='search absolute top-9 left-2'>
                  <svg
                    className='h-6 text-gray-400 pr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                </div>
              </div>
              <button
                className='bg-red-600 hidden md:block rounded-tr-sm rounded-br-sm mt-7 px-10 py-2.5 text-sm text-white inline-block'
                type='submit'
              >
                Search
              </button>
            </form>

            <div className='find-by'>
              <h3 className='mt-3 text-white text-lg mb-3'>Find By</h3>
              <div className='flex'>
                <Link
                  to='#'
                  className='text-white rounded-tl-sm rounded-bl-sm hover:bg-blue-300 bg-blue-400 px-7 py-1.5 border-r border-gray-300'
                >
                  Area
                </Link>
                <Link
                  to='#'
                  className='text-white bg-blue-400 px-7 py-1.5 border-r border-gray-300 hover:bg-blue-300'
                >
                  Agency
                </Link>
                <Link
                  to='#'
                  className='text-white rounded-tr-sm rounded-br-sm bg-blue-400 px-7 py-1.5 hover:bg-blue-300'
                >
                  Address
                </Link>
              </div>
            </div>
            <button
              className='bg-red-600 w-full md:hidden rounded-tr-sm rounded-br-sm mt-10 px-10 py-2.5 text-sm text-white block'
              type='submit'
            >
              Search
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomeCallToAction;

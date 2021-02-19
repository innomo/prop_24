import React from 'react';
import { Link } from 'react-router-dom';

const HomeContent = () => {
  return (
    <div>
      <div className='bg-gray-100 pt-6'>
        <main className='content'>
          <h1 className='text-5xl font-light mb-6 text-gray-500'>
            Property for Sale
          </h1>
          <Link
            to='/details'
            className='w-10/12 flex rounded-lg  bg-white border border-gray-50 overflow-hidden shadow-xl hover:shadow-2xl'
          >
            <div className='w-1/2 max-h-52 bg-gray-500'>
              <img
                className='w-full'
                src='https://images.prop24.com/202665324/Crop318x212'
                alt=''
              />
            </div>
            <div className='w-1/2 h-52'>
              <div className='w-full h-full p-4 relative'>
                <img
                  className='h-12 w-24 right-3 top-3 absolute'
                  src='https://images.prop24.com/194219482/Crop264x153'
                  alt=''
                />
                <div className='text-2xl font-semibold mb-2 tracking-wide text-blue-600'>
                  R600 000
                </div>
                <div className='text-gray-600 text-sm mb-2'>
                  3 Bedroom Apartment
                </div>
                <div className='font-bold text-gray-600 text-sm mb-2'>
                  Greymount
                </div>
                <div className='text-gray-600 mb-2 text-sm'>
                  Presenting the best accomodation in town, surrounded by shops,
                  gym, church and sports ground.
                </div>
                <div className='text-gray-600 flex justify-between mb-2'>
                  <div className='flex space-x-3'>
                    <div className='flex'>
                      <div className='flex items-center space-x-1'>
                        <svg
                          className='h-5 w-5 text-gray-600'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                          />
                        </svg>
                        <span className='font-semibold text-gray-600'>3</span>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='flex items-center space-x-1'>
                        <svg
                          className='h-5 w-5 text-gray-600'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                          />
                        </svg>
                        <span className='font-semibold text-gray-600'>3</span>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='flex items-center space-x-1'>
                        <svg
                          className='h-5 w-5 text-gray-600'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                          />
                        </svg>
                        <span className='font-semibold text-gray-600'>3</span>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='flex items-center space-x-1'>
                        <svg
                          className='h-5 w-5 text-gray-600'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                          />
                        </svg>
                        <span className='font-semibold text-gray-600'>3</span>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <svg
                      className='h-8 text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to='details'
            className='w-10/12 flex rounded bg-white overflow-hidden mt-5 shadow-md hover:shadow-2xl'
          >
            <div className='w-1/2 max-h-52 bg-gray-500'>
              <img
                className='w-full'
                src='https://images.prop24.com/202665324/Crop318x212'
                alt=''
              />
            </div>
            <div className='w-1/2 h-52'>
              <div className='w-full h-full p-4 relative'>
                <img
                  className='h-12 w-24 right-3 top-3 absolute'
                  src='https://images.prop24.com/194219482/Crop264x153'
                  alt=''
                />
                <div className='text-2xl font-semibold mb-2 tracking-wide text-blue-600'>
                  R600 000
                </div>
                <div className='text-gray-600 text-sm mb-2'>
                  3 Bedroom Apartment
                </div>
                <div className='font-bold text-gray-600 text-sm mb-2'>
                  Greymount
                </div>
                <div className='text-gray-600 mb-2 text-sm'>
                  Presenting the best accomodation in town, surrounded by shops,
                  gym, church and sports ground.
                </div>
                <div className='text-gray-600 flex justify-between mb-2'>
                  <div className='flex space-x-3'>
                    <div className='flex'>
                      <div className='flex items-center space-x-1'>
                        <svg
                          className='h-5 w-5 text-gray-600'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                          />
                        </svg>
                        <span className='font-semibold text-gray-600'>3</span>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='flex items-center space-x-1'>
                        <svg
                          className='h-5 w-5 text-gray-600'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                          />
                        </svg>
                        <span className='font-semibold text-gray-600'>3</span>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='flex items-center space-x-1'>
                        <svg
                          className='h-5 w-5 text-gray-600'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                          />
                        </svg>
                        <span className='font-semibold text-gray-600'>3</span>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='flex items-center space-x-1'>
                        <svg
                          className='h-5 w-5 text-gray-600'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                          />
                        </svg>
                        <span className='font-semibold text-gray-600'>3</span>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <svg
                      className='h-8 text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to='details'
            className='w-10/12 flex rounded bg-white overflow-hidden shadow-xl mt-5 hover:shadow-2xl'
          >
            <div className='w-1/2 max-h-52 bg-gray-500'>
              <img
                className='w-full'
                src='https://images.prop24.com/202665324/Crop318x212'
                alt=''
              />
            </div>
            <div className='w-1/2 h-52'>
              <div className='w-full h-full p-4 relative'>
                <img
                  className='h-12 w-24 right-3 top-3 absolute'
                  src='https://images.prop24.com/194219482/Crop264x153'
                  alt=''
                />
                <div className='text-2xl font-semibold mb-2 tracking-wide text-blue-600'>
                  R600 000
                </div>
                <div className='text-gray-600 text-sm mb-2'>
                  3 Bedroom Apartment
                </div>
                <div className='font-bold text-gray-600 text-sm mb-2'>
                  Greymount
                </div>
                <div className='text-gray-600 mb-2 text-sm'>
                  Presenting the best accomodation in town, surrounded by shops,
                  gym, church and sports ground.
                </div>
                <div className='text-gray-600 flex justify-between mb-2'>
                  <div className='flex space-x-3'>
                    <div className='flex'>
                      <div className='flex items-center space-x-1'>
                        <svg
                          className='h-5 w-5 text-gray-600'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                          />
                        </svg>
                        <span className='font-semibold text-gray-600'>3</span>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='flex items-center space-x-1'>
                        <svg
                          className='h-5 w-5 text-gray-600'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                          />
                        </svg>
                        <span className='font-semibold text-gray-600'>3</span>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='flex items-center space-x-1'>
                        <svg
                          className='h-5 w-5 text-gray-600'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                          />
                        </svg>
                        <span className='font-semibold text-gray-600'>3</span>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='flex items-center space-x-1'>
                        <svg
                          className='h-5 w-5 text-gray-600'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                          />
                        </svg>
                        <span className='font-semibold text-gray-600'>3</span>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <svg
                      className='h-8 text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default HomeContent;

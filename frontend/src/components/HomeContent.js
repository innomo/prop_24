import React from 'react';
import { Link } from 'react-router-dom';
import doubleBed from '../img/double-bed.svg';
import bathtub from '../img/bathtub.svg';
import car from '../img/car.svg';
import area from '../img/focus.svg';

const HomeContent = ({ house }) => {
  return (
    <div>
      <div className='bg-gray-100 pt-6'>
        <main className='content'>
          <Link
            to={`/details/${house._id}`}
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
                  R{house.price}
                </div>
                <div className='text-gray-600 text-sm mb-2'>{house.name}</div>
                <div className='font-bold text-gray-600 text-sm mb-2'>
                  {house.location}
                </div>
                <div className='text-gray-600 mb-2 text-sm'>
                  {house.description}
                </div>
                <div className='text-gray-600 flex justify-between mb-2'>
                  <div className='flex space-x-3'>
                    <div className='flex'>
                      {house.bedrooms != 0 ? (
                        <div className='flex items-center space-x-1'>
                          <img src={doubleBed} alt='Bed' srcSet='' />
                          <span className='font-semibold text-gray-600'>
                            {house.bedrooms}
                          </span>
                        </div>
                      ) : null}
                    </div>
                    <div className='flex'>
                      {house.showers != 0 ? (
                        <div className='text-gray-600  flex items-center space-x-1'>
                          <img src={bathtub} alt='shower' srcSet='' />
                          <span className='font-semibold text-gray-600'>
                            {house.showers}
                          </span>
                        </div>
                      ) : null}
                    </div>
                    <div className='flex'>
                      {house.parking != 0 ? (
                        <div className='text-gray-600  flex items-center space-x-1'>
                          <img src={car} alt='shower' srcSet='' />
                          <span className='font-semibold text-gray-600'>
                            {house.parking}
                          </span>
                        </div>
                      ) : null}
                    </div>
                    <div className='flex'>
                      {house.size != 0 ? (
                        <div className='text-gray-600  flex items-center space-x-1'>
                          <img src={area} alt='shower' srcSet='' />
                          <span className='font-semibold text-gray-600'>
                            {`${house.size} m²`}
                          </span>
                        </div>
                      ) : null}
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

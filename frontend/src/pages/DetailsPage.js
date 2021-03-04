import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Gallary from '../components/Gallary';
import ContactAgent from '../components/ContactAgent';
import Description from '../components/Description';
import doubleBed from '../img/double-bed.svg';
import bathtub from '../img/bathtub.svg';
import car from '../img/car.svg';
import area from '../img/focus.svg';

const DetailsPage = ({ match }) => {
  const [house, setHouse] = useState({});

  useEffect(() => {
    const fetchHouse = async () => {
      const { data } = await axios.get(`/api/houses/${match.params.id}`);
      setHouse(data);
    };
    fetchHouse();
  }, []);

  return (
    <div>
      <div className='bg-blue-600 h-10 border-white border-b'>
        {/* Back Link */}
        <div className='content pt-2 flex items-center text-white'>
          <Link to='/' className='flex items-center'>
            <svg
              className='h-6'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
            <span className=''>Back to Results</span>
          </Link>
        </div>
      </div>
      {/* Photos */}
      <div className='content mb-4 h-96 p-0 overflow-hidden bg-gray-200 rounded shadow-md'>
        <div className='relative mx-auto text-white w-9/12'>
          <img
            className='w-full h-80 mx-auto object-center'
            src={house.image}
            alt={house.name}
          />
          <a href='#'>
            <svg
              className='h-16 w-12 absolute top-1/2 right-3 text-white hover:bg-gray-900 hover:opacity-95'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 5l7 7-7 7'
              />
            </svg>
          </a>
          <a href='#'>
            <svg
              className='h-16 w-12 absolute top-1/2 left-3 text-white hover:bg-gray-900 hover:opacity-95'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </a>
        </div>

        <div className='h-16 text-white bg-gray-700 flex justify-between items-center px-3'>
          <a href='#' className='flex hover:text-gray-300 space-x-2'>
            <svg
              className='h-6'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
            </svg>
            <span className=''> Photo Grid </span>
          </a>
          <a href='#' className='flex hover:text-gray-300 space-x-2'>
            <svg
              className='h-6'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
                clipRule='evenodd'
              />
            </svg>
            <span className=''> Photos </span>
          </a>
          <div className=''>
            <span className=''>1 of 11</span>
          </div>
        </div>
      </div>
      {/* Description and Contact */}
      <div className='content mt-4 p-0 mb-10 grid grid-cols-3 gap-5'>
        <div className='col-span-2 grid gap-4'>
          <div className='h-36 border rounded px-3 py-2 border-gray-300'>
            <div className='flex justify-between items-center'>
              <span className='text-2xl font-semibold mb-2 overflow-hidden tracking-wide text-blue-600'>
                R {house.price}
              </span>
              <span className=''>
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
              </span>
            </div>
            <h3 className='text-gray-600 text-xl mb-2'>{house.name}</h3>
            <a href='#' className='text-blue-600 inline-block text-sm mb-2'>
              {house.location}
            </a>
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
            </div>
          </div>
          <div className='h-60 border rounded p-4 border-gray-300'>
            <p>{house.description}</p>
          </div>
        </div>
        <div className='col-span-1 h-93 border rounded p-4 border-gray-300'>
          <div className='text-center text-gray-600 mb-4'>
            <h1 className='text-xl font-semibold'>Contact Agent</h1>
            <h2 className='font-semibold'>{house.agent}</h2>
          </div>
          <form action='POST' className='text-center'>
            <input
              className='w-11/12 border mb-3 text-gray-500 p-2 text-sm border-gray-300 rounded outline-none'
              placeholder='Your Name'
              type='text'
            />
            <input
              className='w-11/12 border mb-3 text-gray-500 p-2 text-sm border-gray-300 rounded outline-none'
              placeholder='Your Email'
              type='text'
            />
            <input
              className='w-11/12 border mb-3 text-gray-500 p-2 text-sm border-gray-300 rounded outline-none'
              placeholder='Your Phone Number'
              type='text'
            />
            <textarea
              className='w-11/12 border resize-none h-24 mb-3 text-gray-500 p-2 text-sm border-gray-300 rounded outline-none overflow-y-hidden'
              placeholder='Please send me more information about web reference P24-109516940 in Ravenswood, Boksburg'
              type='text'
              cols='20'
            ></textarea>
            <button
              className='w-11/12 border hover:border-gray-600 text-white p-2 text-sm bg-green-400 rounded outline-none'
              type='submit'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

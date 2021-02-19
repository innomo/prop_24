import React from 'react';
import logo from '../img/smartphone_logo_svg.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='content relative flex justify-between items-center text-gray-600 font-normal pt-5 pb-4'>
        <div className='absolute block md:hidden top-5 left-3' id='burger'>
          <svg
            className='w-7'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </div>

        <Link
          to='/'
          className='w-40 md:mx-0 mx-auto md:w-52 h-6 md:h-10 order-2 md:order-1'
        >
          <img
            className=''
            src={logo}
            alt='Property24 Logo'
            width='210px'
            srcSet=''
          />
        </Link>
        <div
          className='md:flex mt-9 md:mt-0 hidden md:block flex-col md:flex-row order-1 md:order-2'
          id='menu'
        >
          <div>
            <ul className='md:flex flex-col md:flex-row space-x-2 text-sm'>
              <li>
                <Link className='hover:text-blue-600' to='#'>
                  For Sale
                </Link>
              </li>
              <li>
                <Link className='hover:text-blue-600' to='#'>
                  {' '}
                  To Rent
                </Link>
              </li>
              <li>
                <Link className='hover:text-blue-600' to='#'>
                  Developments
                </Link>
              </li>
              <li>
                <Link className='hover:text-blue-600' to='#'>
                  Commercial
                </Link>
              </li>
              <li>
                <Link className='hover:text-blue-600' to='#'>
                  Calculators
                </Link>
              </li>
              <li>
                <Link className='hover:text-blue-600' to='#'>
                  Advice
                </Link>
              </li>
              <li className='bg-yellow-500 text-gray-900 px-2 p-0.5'>
                <Link to='#'>List Privately</Link>
              </li>
            </ul>
          </div>
          <div className=''>
            <ul className='flex space-x-2 text-sm'>
              <li className='ml-2 text-blue-400 hover:text-green-500'>
                <Link to='login'>Log in</Link>
              </li>
              <span className='text-gray-300'>|</span>
              <li className='text-blue-400 hover:text-green-500'>
                <Link to='/signup'>Sign Up</Link>
              </li>
              <li className=''>
                <Link to='#'>
                  <svg
                    className='h-5 stroke-1 text-gray-400'
                    inline-block
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

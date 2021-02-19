import React from 'react';
import logo from '../img/smartphone_logo_svg.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='my-10'>
      <div className='p-0 content'>
        <div className='flex justify-between border-b-2 pb-4 mb-4 border-gray-200'>
          <img
            className='w-52 h-10'
            src={logo}
            alt='Property24 Logo'
            width='210px'
            srcSet=''
          />
          <div className=''>
            <Link to='#' className='text-gray-400 hover:text-blue-900'>
              <i className='fab fa-facebook-square fa-2x'></i>
            </Link>
            <Link to='#' className='text-gray-400 hover:text-blue-400 mx-2'>
              <i className='fab fa-twitter-square fa-2x'></i>
            </Link>
            <Link to='#' className='text-gray-400 hover:text-red-600 mr-2'>
              <i className='fab fa-pinterest-square fa-2x'></i>
            </Link>
            <Link to='#' className='text-gray-400 hover:text-red-700'>
              <i className='fab fa-youtube-square fa-2x'></i>
            </Link>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className=''>
            <div className='space-x-2 text-sm mb-4'>
              <Link to='#' className='text-blue-600 hover:underline'>
                About Us
              </Link>
              <Link to='#' className='text-blue-600 hover:underline'>
                Contact Us
              </Link>
              <Link to='#' className='text-blue-600 hover:underline'>
                {' '}
                Feedback
              </Link>
              <Link to='#' className='text-blue-600 hover:underline'>
                Join Our
              </Link>
              <Link to='#' className='text-blue-600 hover:underline'>
                Team Terms &#38; Conditions
              </Link>
              <Link to='#' className='text-blue-600 hover:underline'>
                Sitemap
              </Link>
              <Link to='#' className='text-blue-600 hover:underline'>
                {' '}
                Agent Zone
              </Link>
            </div>
            <div className=''>
              <p className='text-sm text-gray-500'>
                Copyright © 2020 Property24 - All rights reserved.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center space-x-3'>
            <h1 className='font-bold text-gray-700'>Download the App</h1>
            <div className='mt-3'>
              <Link to='#' className='text-gray-400 hover:text-gray-700'>
                <i className='fab fa-apple fa-2x'></i>
              </Link>
              <Link to='#' className='text-gray-400 ml-2 hover:text-gray-700'>
                <i className='fab fa-android fa-2x'></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

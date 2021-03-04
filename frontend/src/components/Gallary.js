import React from 'react';

const Gallary = () => {
  return (
    <div>
      <div class='bg-blue-600 h-10 border-white border-b'>
        <div class='content pt-2 flex items-center text-white'>
          <a href='24.html' class='flex items-center'>
            <svg
              class='h-6'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clip-rule='evenodd'
              />
            </svg>
            <span class=''>Back to Results</span>
          </a>
        </div>
      </div>
      <div class='content mb-4 h-96 p-0 overflow-hidden bg-gray-200 rounded shadow-md'>
        <div class='relative mx-auto text-white w-9/12'>
          <img
            class='w-full h-80 mx-auto object-center'
            src='https://images.prop24.com/253515238/Ensure1280x720'
            alt=''
          />
          <a href='#'>
            <svg
              class='h-16 w-12 absolute top-1/2 right-3 text-white hover:bg-gray-900 hover:opacity-95'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M9 5l7 7-7 7'
              />
            </svg>
          </a>
          <a href='#'>
            <svg
              class='h-16 w-12 absolute top-1/2 left-3 text-white hover:bg-gray-900 hover:opacity-95'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </a>
        </div>

        <div class='h-16 text-white bg-gray-700 flex justify-between items-center px-3'>
          <a href='#' class='flex hover:text-gray-300 space-x-2'>
            <svg
              class='h-6'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
            </svg>
            <span class=''> Photo Grid </span>
          </a>
          <a href='#' class='flex hover:text-gray-300 space-x-2'>
            <svg
              class='h-6'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
                clip-rule='evenodd'
              />
            </svg>
            <span class=''> Photos </span>
          </a>
          <div class=''>
            <span class=''>1 of 11</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;

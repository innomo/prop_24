import React from 'react';

const ContactAgent = () => {
  return (
    <div>
      <div class='col-span-1 h-93 border rounded p-4 border-gray-300'>
        <div class='text-center text-gray-600 mb-4'>
          <h1 class='text-xl font-semibold'>Contact Agent</h1>
          <h2 class='font-semibold'>Wendy dos Santos</h2>
        </div>
        <form action='POST' class='text-center'>
          <input
            class='w-11/12 border mb-3 text-gray-500 p-2 text-sm border-gray-300 rounded outline-none'
            placeholder='Your Name'
            type='text'
          />
          <input
            class='w-11/12 border mb-3 text-gray-500 p-2 text-sm border-gray-300 rounded outline-none'
            placeholder='Your Email'
            type='text'
          />
          <input
            class='w-11/12 border mb-3 text-gray-500 p-2 text-sm border-gray-300 rounded outline-none'
            placeholder='Your Phone Number'
            type='text'
          />
          <textarea
            class='w-11/12 border resize-none h-24 mb-3 text-gray-500 p-2 text-sm border-gray-300 rounded outline-none overflow-y-hidden'
            placeholder='Please send me more information about web reference P24-109516940 in Ravenswood, Boksburg'
            type='text'
            cols='20'
          ></textarea>
          <button
            class='w-11/12 border hover:border-gray-600 text-white p-2 text-sm bg-green-400 rounded outline-none'
            type='submit'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactAgent;

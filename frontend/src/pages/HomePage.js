import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeCallToAction from '../components/HomeCallToAction';
import HomeContent from '../components/HomeContent';

const HomePage = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const { data } = await axios.get('/api/houses');

      setHouses(data);
    };
    fetchHouses();
  }, []);

  return (
    <>
      <HomeCallToAction />
      <div className='bg-gray-100'>
        <h1 className='content  text-5xl font-light mb-6 text-gray-500'>
          Property for Sale
        </h1>
      </div>

      {houses.map((house) => (
        <div key={house._id}>
          <HomeContent house={house} />
        </div>
      ))}
    </>
  );
};

export default HomePage;

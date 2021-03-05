import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import HomeCallToAction from '../components/HomeCallToAction';
import HomeContent from '../components/HomeContent';
import { listHouses } from '../actions/houseActions';

const HomePage = () => {
  const dispatch = useDispatch();

  const houseList = useSelector((state) => state.houseList);

  const { loading, error, houses } = houseList;

  useEffect(() => {
    dispatch(listHouses());
  }, [dispatch]);

  return (
    <>
      <HomeCallToAction />
      <div className='bg-gray-100'>
        <h1 className='content  text-5xl font-light mb-6 text-gray-500'>
          Property for Sale
        </h1>
      </div>
      {/* {loading ? (<h2>Loading...</h2>)
       : error ? ( <h3>{error}</h3>
        } ) :
}: */}
      (
      {houses.map((house) => (
        <div key={house._id}>
          <HomeContent house={house} />
        </div>
      ))}
      )
    </>
  );
};

export default HomePage;

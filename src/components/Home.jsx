import React from 'react';
import map from '../assets/map.png'
import Selector from './Selector'

const Home = () => {
  return (
    <>
    <div>
      <img className='object-cover w-full' src={map} alt="map" />
    </div>
    <div>
       <Selector/> 
    </div>
    </>
  );
};




export default Home;
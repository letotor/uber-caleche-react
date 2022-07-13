import React, { useState } from 'react';
import IsOrder from './IsOrder';
import NotOrder from './NotOrder';

const Home = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [isOrder, setIsOrder] = useState(false);
  console.log(isOrder);
  return (
    <>
      {isOrder ? (
        <IsOrder setIsOrder={setIsOrder} start={start} end={end} />
      ) : (
        <NotOrder setIsOrder={setIsOrder} setStart={setStart} setEnd={setEnd} />
      )}
    </>
  );
};

export default Home;

import React, { useState } from 'react';
import IsOrder from './IsOrder';
import NotOrder from './NotOrder';

const Home = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [isOrder, setIsOrder] = useState(false);
  const [value, setValue] = useState('');

  return (
    <>
      {isOrder ? (
        <IsOrder
          setIsOrder={setIsOrder}
          start={start}
          end={end}
          value={value}
        />
      ) : (
        <NotOrder
          setIsOrder={setIsOrder}
          setStart={setStart}
          setEnd={setEnd}
          setValue={setValue}
        />
      )}
    </>
  );
};

export default Home;

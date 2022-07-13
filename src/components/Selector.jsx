import React from 'react';
import caleche from '../assets/calecheHome.svg';

const Selector = () => {
  return (
    <div className="flex justify-center w-full gap-2 font-sans component-preview">
      <select
        className="w-full max-w-lg mt-16 font-extrabold text-center select select-bordered select-lg"
        defaultValue="DEFAULT"
      >
        <option disabled selected value="DEFAULT">
          Select your vehicle
        </option>
        <option
          style={{ backgroundImage: { caleche }, backgroundSize: '30px' }}
          value="1"
        >
          Carriage
        </option>
        <option value="2">🐎 Horse</option>
        <option value="3">🐂 Beef cart</option>
        <option value="4">🦄 Unicorn</option>
      </select>
    </div>
  );
};

export default Selector;

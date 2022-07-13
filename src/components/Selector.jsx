import React from 'react';

const Selector = ({ setValue }) => {
  return (
    <div className="flex justify-center w-full gap-2 font-sans component-preview">
      <select
        className="w-full max-w-lg mt-16 font-extrabold text-center select select-bordered select-lg"
        defaultValue="DEFAULT"
        onChange={(e) => setValue(e.target.value)}
      >
        <option disabled value="DEFAULT">
          Select your vehicle
        </option>
        <option value="🎩">🎩Carriage</option>
        <option value="🐎">🐎 Horse</option>
        <option value="🐂">🐂 Beef cart</option>
        <option value="🦄">🦄 Unicorn</option>
      </select>
    </div>
  );
};

export default Selector;

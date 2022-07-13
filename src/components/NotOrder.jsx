import React from 'react';
import map from '../assets/map.png';
import Inputor from './Inputor';
import Selector from './Selector';

const NotOrder = ({ setIsOrder, setStart, setEnd }) => {
  return (
    <div
      style={{ backgroundImage: `url(${map})`, height: 'calc(100% - 96px)' }}
      className="bg-cover"
    >
      <div className="flex flex-col items-center w-full gap-2 p-4 font-sans component-preview">
        <Selector />
        <Inputor text="Start" state={setStart} />
        <Inputor text="End" state={setEnd} />
        <button
          className="mt-8 btn btn-primary"
          onClick={() => setIsOrder(true)}
        >
          Go order
        </button>
      </div>
    </div>
  );
};

export default NotOrder;

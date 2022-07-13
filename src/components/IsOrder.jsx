import React from 'react';

const IsOrder = ({ setIsOrder, start, end }) => {
  return (
    <div
      style={{ height: 'calc(100vh - 96px)' }}
      className="flex flex-col items-center bg-cover"
    >
      <p className="text-lg font-bold">Your Driver</p>
      <h3 className="mb-4 text-xs capitalize">
        abdou <span className="uppercase">kerkeb</span>
      </h3>
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src="https://raw.githubusercontent.com/MoreauJonas/LordOfPing/main/assets/img/Abdou.png" />
        </div>
      </div>
      <div className="mt-8 stats bg-primary text-primary-content">
        <div className="stat">
          <div className="stat-title">Last order</div>
          <div className="capitalize stat-value">
            {start} - {end}
          </div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success">About details</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Price</div>
          <div
            className="stat-value"
            style={{ height: 'clamp(1rem, 6vw, 2rem)' }}
          >
            2 pa
          </div>
        </div>
      </div>
      <ul className="mt-8 steps">
        <li className="step step-primary">Order</li>
        <li className="step step-primary">Found Driver</li>
        <li className="step">Driver has arrived</li>
        <li className="step">You have arrived</li>
      </ul>
      <button
        className="mt-8 btn btn-primary"
        onClick={() => setIsOrder(false)}
      >
        Cancel the order
      </button>
    </div>
  );
};

export default IsOrder;

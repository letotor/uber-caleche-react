import React from 'react';
import Footer from './Footer';

const Account = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-8 avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
      <h2 className="mt-4 font-bold capitalize">
        john <span className="uppercase">doe</span>
      </h2>
      <button className="mt-4 btn btn-primary">
        Modifier mes informations
      </button>

      <div className="mt-8 stats bg-primary text-primary-content">
        <div className="stat">
          <div className="stat-title">Last order</div>
          <div className="capitalize stat-value">nantes - vannes</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success">About details</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Price</div>
          <div className="stat-value">2 pa</div>
        </div>
      </div>
      <button className="mt-4 btn btn-outline">Other orders</button>
      <Footer />
    </div>
  );
};

export default Account;

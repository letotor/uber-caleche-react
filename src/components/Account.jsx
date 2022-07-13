import React, { useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import Footer from './Footer';

const Account = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  useEffect(() => {
    console.log('account info', userInfo);
  }, [userInfo]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-8 text-2xl text-slate-500 ">Welcome to your profile</h1>
      <div className="mt-8 avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          {userInfo.isConnected && <img src={userInfo.avatar} />}
        </div>
      </div>

      {/* {JSON.stringify(userInfo, null, 2)} */}

      <div className="flex capitalize">
        <span>{`${userInfo.firstname} `}</span>
        <span className="uppercase">{userInfo.lastname}</span>
      </div>
      <button className="mt-4 btn btn-primary">Edit informations</button>

      <div className="mt-8 stats bg-primary text-primary-content">
        <div className="stat">
          <div className="stat-title">Last order</div>
          <div className="capitalize stat-value">
            {userInfo.startCity} - {userInfo.endCity}
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
      <button className="mt-4 btn btn-outline">Other orders</button>

      <Footer />
    </div>
  );
};

export default Account;

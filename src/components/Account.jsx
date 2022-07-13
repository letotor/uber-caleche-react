import React, { useContext, useEffect } from 'react';
import Footer from './Footer';
import UserContext from '../contexts/UserContext'

const Account = () => {
  const { userInfo, setUserInfo } = useContext(UserContext)
  useEffect(() => {

    console.log('account info', userInfo)
  }, [userInfo])

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl text-slate-500 mt-8 ">Bienvenu sur votre profil</h1>
      <div className="mt-8 avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          {userInfo.isConnected && <img src={userInfo.avatar} />}

        </div>
      </div>

      {/* {JSON.stringify(userInfo, null, 2)} */}

      <h2 className="mt-4 font-bold capitalize">
        {userInfo.firstname} {userInfo.lastname}</h2>
      <div className="mt-4">
        <span>email : {userInfo.email} </span>
        <span className="uppercase">doe</span>

          <button className="mt-4 btn btn-primary">
            Modifier mes informations
          </button>

          <div className="mt-8 stats bg-primary text-primary-content">
            <div className="stat">
              <div className="stat-title">Last order</div>
              <div className="capitalize stat-value">{userInfo.city}</div>
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
      </div>
    );
};

 export default Account;

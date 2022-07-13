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
      <h2 className="mt-4 font-bold uppercase">{userInfo.firstname} {userInfo.lastname}</h2>
      <div className="mt-4"> <p>email : {userInfo.email}</p>
        <p>city : {userInfo.city}</p></div>


      {/* {JSON.stringify(userInfo, null, 2)} */}
      <Footer />
    </div>
  );
};

export default Account;

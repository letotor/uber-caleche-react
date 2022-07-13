import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext'

const Header = () => {
  const { userInfo, setUserInfo } = useContext(UserContext)

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <a className="text-xl normal-case btn btn-ghost">Uber Calèche</a>
      </div>
      <div className="navbar-end">
      

        <div className="avatar">
          <div className="w-12  m-4 rounded-full">
            {userInfo.isConnected && < img src={userInfo.avatar} />}
          </div>
        </div>
    

        <Link to="/login">
        <button className="btn btn-ghost border-solid border-2 border-sky-500">
          <div className="">
            Login
          </div>
        </button>
        </Link>
        {/* <a className="text-xl normal-case btn btn-ghost">UBER Calèche</a> */}
      </div>
      {/* <div className="navbar-end"></div> */}
    </div>
  );
};

export default Header;

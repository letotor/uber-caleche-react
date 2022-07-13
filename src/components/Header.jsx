import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const Header = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <a className="text-xl normal-case btn btn-ghost">Uber Calèche</a>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button className="border-2 border-solid btn btn-ghost border-sky-500">
            <div className="">Login</div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

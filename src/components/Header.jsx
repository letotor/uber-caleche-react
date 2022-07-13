import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <a className="text-xl normal-case btn btn-ghost">Uber Calèche</a>
      </div>
      <div className="navbar-end">
      

        <div className="avatar">
          <div className="w-12  m-4 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
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

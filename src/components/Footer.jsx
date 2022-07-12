import React from 'react';

import { NavLink } from 'react-router-dom'
import homeImage from '../assets/calecheHome.svg'
import profileImage from '../assets/account.svg'
import contactImage from '../assets/contact.svg'
const Footer = () => {

let activeClassName = "underline"

  return (
  
<div className="btm-nav">
  <button>
    <NavLink to='/' className={({isActive}) => isActive ? activeClassName : undefined}>
    <img src={homeImage} alt="order" className="w-6 h-6" /><span className="text-xs btm-nav-label">Order</span>
    </NavLink>
  </button>
  <button className="active">
    <NavLink to='/profile' className={({isActive}) => isActive ? activeClassName : undefined}>
    <img src={profileImage} alt="profile" className="w-6 h-6 " /><span className="text-xs btm-nav-label">Account</span>
    </NavLink>
  </button>
  <button>
  <NavLink to='/login' className={({isActive}) => isActive ? activeClassName : undefined}>
  <img src={contactImage} alt="login" className="w-6 h-6" /><span className="text-xs btm-nav-label">Login</span>
  </NavLink>
  </button>
</div>
  );
};

export default Footer;

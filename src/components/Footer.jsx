import React from 'react';
import { NavLink } from 'react-router-dom';
import profileImage from '../assets/account.svg';
import homeImage from '../assets/calecheHome.svg';
import contactImage from '../assets/contact.svg';
const Footer = () => {
  return (
    <div className="btm-nav">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        <img src={homeImage} alt="order" className="w-6 h-6" />
        <span className="text-xs btm-nav-label">Order</span>
      </NavLink>
      <NavLink
        to="/account"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        <img src={profileImage} alt="profile" className="w-6 h-6" />
        <span className="text-xs btm-nav-label">Account</span>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        <img src={contactImage} alt="contact" className="w-6 h-6" />
        <span className="text-xs btm-nav-label">Contact</span>
      </NavLink>
    </div>
  );
};

export default Footer;

import React from 'react';
import homeImage from '../assets/calecheHome.svg'
import profileImage from '../assets/account.svg'
import contactImage from '../assets/contact.svg'
const Footer = () => {
  return (
  
<div className="btm-nav">
  <button>
    <img src={homeImage} alt="order" className="w-6 h-6" /><span className="text-xs btm-nav-label">Order</span>
  </button>
  <button className="active">
    <img src={profileImage} alt="profile" className="w-6 h-6" /><span className="text-xs btm-nav-label">Account</span>
  </button>
  <button>
  <img src={contactImage} alt="contact" className="w-6 h-6" /><span className="text-xs btm-nav-label">Contact</span>
  </button>
</div>
  );
};

export default Footer;

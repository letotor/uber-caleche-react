import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Selector from './components/Selector'
import Available from './components/Available';
import Services from './components/Services';

import UserContext from './contexts/UserContext'
import Account from './components/Account';

const App = () => {
  const [userInfo, setUserInfo] = useState({
    id: '',
    isConnected:false,
    email: '',
    lastname:'',
    firstname:'',
    avatar: '',
    password:'',
    city:''
  })

  
  return (
    <UserContext.Provider
      value={{ userInfo: userInfo, setUserInfo: setUserInfo }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/selector" element={<Selector />} />
        <Route path='/services' element={<Services />}  />
        <Route path='/available' element={<Available />} /> 
        <Route path='/account' element={<Account />} /> 
      </Routes>
      <Footer />
      {console.log('userinfo app', userInfo)}
    </UserContext.Provider>
  );
};

export default App;

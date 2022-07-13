import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from './components/Account';
import Available from './components/Available';
import Contact from './components/Contact';
import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Selector from './components/Selector';
import Services from './components/Services';
import UserContext from './contexts/UserContext';

const App = () => {
  const [userInfo, setUserInfo] = useState({
    id: '',
    isConnected: false,
    email: '',
    lastname: '',
    firstname: '',
    avatar: '',
    password: '',
    city: '',
  });

  return (
    <UserContext.Provider
      value={{ userInfo: userInfo, setUserInfo: setUserInfo }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/selector" element={<Selector />} />
        <Route path="/available" element={<Available />} />
        <Route path="/account" element={<Account />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      {console.log('userinfo app', userInfo)}
    </UserContext.Provider>
  );
};

export default App;

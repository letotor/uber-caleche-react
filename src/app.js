import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from "./components/Account";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}  />
         <Route
          path='/login'
          element={<Login />}
        />
        <Route path="/account" element={<Account />} />
      </Routes> 
        <Footer />
      
    </div>
  );
};

export default App;

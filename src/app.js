import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Profile from './components/Profile';

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
        <Route path='/profile' element={<Profile />} />
      </Routes> 
        <Footer />
      
    </div>
  );
};

export default App;

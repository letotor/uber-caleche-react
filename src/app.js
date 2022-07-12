import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

const app = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-screen max-w-full max-h-screen">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default app;

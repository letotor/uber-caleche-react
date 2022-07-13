import React from 'react';
import Footer from './Footer';
import Profile from './Profile';
import { useEffect, useState } from 'react';
const Account = () => {

  const [profiles, setProfiles] = useState([])

  useEffect(() => {
  fetch('https://dhpjymse.directus.app/items/client')
  .then(res => res.json())
  .then(res => setProfiles(res.data))
  }, [])

  return (
   
      <div className="flex flex-col items-center">
     <div className="mt-8 avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
           <img src="https://placeimg.com/192/192/people" />
       </div>
       </div>
       <h2 className="mt-4 font-bold uppercase">Nom Prénom</h2> 
      <Footer />
    </div>
  );
};

export default Account;

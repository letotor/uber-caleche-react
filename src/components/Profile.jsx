import React, { useEffect, useState } from 'react'
import userImage from '../assets/photoProfil.jpg'


const Profile = ({name, description, image}) => {




  return (


    <div className="shadow-xl card w-96 bg-base-100">
  <figure className="px-10 pt-10">
    <img src={image} alt={name} className="rounded-xl h-52" />
  </figure>
  <div className="items-center text-center card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions">
      {/* <button className="btn btn-primary">Buy Now</button> */}
    </div>
  </div>
</div>
)
  
}

export default Profile
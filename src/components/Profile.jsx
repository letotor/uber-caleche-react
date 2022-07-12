import React from 'react'
import userImage from '../assets/photoProfil.jpg'
const Profile = () => {
  return (
    <div className="shadow-xl  card w-96 bg-base-100">
  <figure className="px-10 pt-10">
    <img src={userImage} alt="user image" className="rounded-xl h-52" />
  </figure>
  <div className="items-center text-center card-body">
    <h2 className="card-title">Brice</h2>
    <p>info utilisateur</p>
    <div className="card-actions">
      {/* <button className="btn btn-primary">Buy Now</button> */}
    </div>
  </div>
</div>
  )
}

export default Profile
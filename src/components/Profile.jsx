import React, { useContext } from 'react'
import userImage from '../assets/photoProfil.jpg'

import UserContext from '../contexts/UserContext'


const Profile = () => {
  const { userInfo, setUserInfo } = useContext(UserContext)


  return (
    <div className="shadow-xl  card w-96 bg-base-100"> 
    {JSON.stringify(userInfo, null, 2)}
  <figure className="px-10 pt-10">
   
       { userInfo.isConnected && <img src={userInfo.avatar} alt="user image" className="rounded-xl h-52" />}
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
import React from 'react'
import caleche from '../assets/calecheHome.svg'


const Selector = () => {
  return (
    
    <div className="flex justify-center w-full gap-2 p-4 font-sans component-preview">
   <select className="w-full max-w-lg mt-16 font-extrabold text-center select select-bordered select-lg">
  <option disabled selected>Choisissez votre transport</option>
  <option style={{backgroundImage:{caleche}, backgroundSize:"30px"}}>Calèche</option>
  <option>🐎 Cheval</option>
  <option>🐂 Chariot à boeufs</option>
  <option>🦄 Licorne</option>
</select>
  </div>
)
  
}

export default Selector
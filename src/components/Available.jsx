import React, { useState } from 'react'
import { AvailableCard } from './AvailableCard'

import drivers from '../components/drivers.json'

const Available = () => {
const [availableDrivers, setAvailableDrivers] = useState(drivers)

  return (
    <div>
        {availableDrivers.map((availableDriver, i) => (
          <AvailableCard availableDriver={availableDriver} key={i} index={i}/>
        ))}
        
    </div>
  )
}

export default Available
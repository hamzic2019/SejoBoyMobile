import React, {memo} from 'react'
import {Link} from 'react-router-dom';
import './Vehicles.css'
import './Vehicles.css'

// FcPrevious
import { FcPrevious } from "react-icons/fc";

const Vehicles = () => {
  return (
    <div className='vehiclesWrapper'>
      <div className='vehiclesWrapperBackWrapper'>
          <Link to="/" className='vehiclesWrapperBackWrapperIcon'><FcPrevious /></Link>
      </div>
    </div>
  )
}

export default memo(Vehicles)
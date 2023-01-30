import React, {memo} from 'react'
import {Link} from 'react-router-dom';
import './Vehicles.css'
import './Vehicles.css'

// FcPrevious
import { FcPrevious, FcSearch } from "react-icons/fc";

const Vehicles = () => {
  return (
    <div className='vehiclesWrapper'>
      <div className='vehiclesWrapperBackWrapper'>
          <Link to="/" className='vehiclesWrapperBackWrapperIcon'><FcPrevious /></Link>
      </div>

      <div className="vehiclesWrapperSearchWrapper">
        <h1>Let's find your favorite car here</h1>
        <div className="vehiclesWrapperSearchWrapperInput">
          <FcSearch className='vehiclesWrapperSearchWrapperInputIcon' />
          <input type="text" placeholder='Find your car' />
        </div>
      </div>
      
    </div>
  )
}

export default memo(Vehicles)
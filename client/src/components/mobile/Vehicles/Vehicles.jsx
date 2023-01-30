import React, {memo} from 'react'
import {Link} from 'react-router-dom';
import './Vehicles.css'
import './Vehicles.css'

// FcPrevious
import { FcPrevious, FcSearch } from "react-icons/fc";

import Car from './../Car/Car';

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

      <div className='vehiclesWrapperBrandPicking'>

        <Car />
  
        <Car />

        <Car />

        <Car />

      </div>
      
    </div>
  )
}

export default memo(Vehicles)
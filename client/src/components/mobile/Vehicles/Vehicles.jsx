import React, {memo} from 'react'
import {Link} from 'react-router-dom';
import './Vehicles.css'
import './Vehicles.css'

// FcPrevious
import {FcSearch } from "react-icons/fc";

import Car from './../Car/Car';
import BackHeader from '../BackHeader/BackHeader';

const Vehicles = () => {
  return (
    <div className='vehiclesWrapper'>
      <BackHeader url="./whatsapp.png"  />

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
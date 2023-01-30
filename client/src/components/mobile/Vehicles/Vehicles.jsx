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
          <a href="https://wa.me/+38766994499?text=👋%20Hello!%20I%20am%20interested%20in%20renting%20a%20car%20🚗">
            <img src="./whatsapp.png" className='vehiclesWrapperBackWrapperWhatsapp' alt="" />
          </a>
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
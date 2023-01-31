import React from 'react'
import {Link} from 'react-router-dom';
import './BackHeader.css'

import { FcPrevious, FcSearch } from "react-icons/fc";

const BackHeader = ({url}) => {
  return (
    <div className='vehiclesWrapperBackWrapper'>
          <Link to="/" className='vehiclesWrapperBackWrapperIcon'><FcPrevious /></Link>
          
          {url && 
            <a href="https://wa.me/+38766994499?text=👋%20Hello!%20I%20am%20interested%20in%20renting%20a%20car%20🚗">
              <img src={url} className='vehiclesWrapperBackWrapperWhatsapp' alt="" />
            </a>
          }
      </div>
  )
}

export default BackHeader
import React, {memo} from 'react'
import './Car.css';
import {Link} from 'react-router-dom';

import {AiOutlineRight, AiFillStar} from 'react-icons/ai'

const Car = () => {
  return (
    <div className='carWrapper'>
      <div className="carwrapperImage"></div>
      <div className='carwrapperImageUnderDetails'>
        <h1>Audi A6</h1>
        <p><span className='carwrapperImageUnderDetailsPrice'>$120</span><span className='carwrapperImageUnderDetailsPriceAmount'>/Day</span></p>
        <div className='carwrapperImageUnderDetailsScorWrapper'>
            <AiFillStar className='carwrapperImageUnderDetailsIcon' /> 
            <p>4.95</p>
        </div>
        <Link to="/vehicles/bmw" className='carwrapperImageSeeDetails'>
            See Details
            <AiOutlineRight className='carwrapperImageSeeDetailsIcon' />
        </Link>
      </div>
    </div>
  )
}

export default memo(Car)
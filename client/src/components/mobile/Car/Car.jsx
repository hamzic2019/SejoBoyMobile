import React, {memo} from 'react'
import './Car.css';

import {AiOutlineRight, AiFillStar} from 'react-icons/ai'

const Car = () => {
  return (
    <div className='carWrapper'>
      <div className="carwrapperImage"></div>
      <div className='carwrapperImageUnderDetails'>
        <h1>Audi A6</h1>
        <p>$120 / Day</p>
        <div className='carwrapperImageUnderDetailsScorWrapper'>
            <AiFillStar className='carwrapperImageUnderDetailsIcon' /> 
            <p>4.95</p>
        </div>
        <div className='carwrapperImageSeeDetails'>
            See Details
            <AiOutlineRight className='carwrapperImageSeeDetailsIcon' />
        </div>
      </div>
    </div>
  )
}

export default memo(Car)
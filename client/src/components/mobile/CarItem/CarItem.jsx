import React, {memo} from 'react'
import BackHeader from '../BackHeader/BackHeader';
import './CarItem.css';

import { Link } from 'react-router-dom';

import { AiFillStar} from 'react-icons/ai'

const CarItem = () => {
  return (
    <div className='carItemWrapper'>
       <BackHeader url={false} back="/vehicles" />

       <h1>Audi A6 Quattro 2019</h1>
       
       <div className="carItemRatingWrapper">
            <AiFillStar className='carwrapperImageUnderDetailsIcon' /> 
            <p>4.95 <span>(110 Reviews)</span></p>
       </div>

       <div className="carItemImageWrapper"></div>
       <h2>Overview</h2>
       <p className='carDescription'>Experience luxury and performance with our 2019 Audi A6 Quattro, the ultimate rental car for a smooth and stylish drive.</p>
    </div>
  )
}

export default memo(CarItem)
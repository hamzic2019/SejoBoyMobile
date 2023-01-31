import React, {memo} from 'react'
import BackHeader from '../BackHeader/BackHeader';
import './CarItem.css';

import { Link } from 'react-router-dom';

import { AiFillStar} from 'react-icons/ai'
import {MdEventSeat} from 'react-icons/md'
import {RiGasStationFill} from 'react-icons/ri'
import {IoSpeedometer} from 'react-icons/io5'
import {GiGearStick} from 'react-icons/gi'

// MdEventSeat

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
    
       <div className="carItemWrapperPerkIcons">
            <div className="seats carItemWrapperPerkIconsIkona">
              <MdEventSeat />
              <p>5 Seats</p>
            </div>

            <div className="gas carItemWrapperPerkIconsIkona">
              <RiGasStationFill />
              <p>800km+</p>
            </div>

            <div className="speed carItemWrapperPerkIconsIkona">
              <IoSpeedometer />
              <p>230km/h</p>
            </div>

            <div className="Gear carItemWrapperPerkIconsIkona">
              <GiGearStick />
              <p>Auto</p>
            </div>

       </div>

    </div>
  )
}

export default memo(CarItem)
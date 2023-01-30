import React, {memo} from 'react'
import './Car.css';

const Car = () => {
  return (
    <div className='carWrapper'>
      <div className="carwrapperImage"></div>
      <h1>AUTOMOBIL</h1>
    </div>
  )
}

export default memo(Car)
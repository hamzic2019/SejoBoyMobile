import React, {memo} from 'react'
import './Car.css';

const Car = () => {
  return (
    <div className='carWrapper'>
      <h1>AUTOMOBIL</h1>
    </div>
  )
}

export default memo(Car)
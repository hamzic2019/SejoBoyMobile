import React, {memo} from 'react'
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className='homeScreenWrapper'>
        <button>Let's Start</button>
    </div>
  )
}

export default memo(HomeScreen)
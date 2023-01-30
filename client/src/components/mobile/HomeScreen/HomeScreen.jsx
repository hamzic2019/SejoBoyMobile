import React, {memo} from 'react'
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className='homeScreenWrapper'>
        <div>
          <h1>Let'Start a New Experience</h1>
          <p>Choose your favourite car, rent it and enjoy new experience with Sejo Boy Mobile!</p>
        </div>
        <button>Let's Start</button>
    </div>
  )
}

export default memo(HomeScreen)
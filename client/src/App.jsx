import React, { useState, useEffect, memo } from "react";
import {Routes, Route} from 'react-router-dom';

// importing components
import HomeScreen from "./components/mobile/HomeScreen/HomeScreen";
import Vehicles from './components/mobile/Vehicles/Vehicles'

const App = () => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const isMobile = /(android|iphone|ipad|mobile)/i.test(
      window.navigator.userAgent
    );
    setDeviceType(isMobile ? "mobile" : "desktop");
  }, []);

  return (
    <div>
      <Routes>
       <Route path="/" element={deviceType === "mobile" ? (<HomeScreen />) : (<HomeScreen />)} />
       <Route path="/vehicles" element={deviceType === "mobile" ? (<Vehicles />) : (<Vehicles />)} />
       </Routes>
    </div>
  );
};

export default memo(App);


// {deviceType === "mobile" ? (<HomeScreen />) : (<HomeScreen />)}

// <Route path="/vehicles" element={<Vehicles />} />
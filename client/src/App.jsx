import React, { useState, useEffect, memo } from "react";
import './App.css'
import {Routes, Route} from 'react-router-dom';

// importing components
import HomeScreen from "./components/mobile/HomeScreen/HomeScreen";
import Vehicles from './components/mobile/Vehicles/Vehicles';

const App = () => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const isMobile = /(android|iphone|ipad|mobile)/i.test(
      window.navigator.userAgent
    );
    setDeviceType(isMobile ? "mobile" : "desktop");
  }, []);

  return (
    <Routes>
      <Route path="/vehicles" element={
        <div className="route-transition">
          {deviceType === "mobile" ? (<Vehicles />) : (<Vehicles />)}
        </div>
      } />
      <Route path="/" element={
        <div className="route-transition">
          {deviceType === "mobile" ? (<HomeScreen />) : (<HomeScreen />)}
        </div>
      } />
      <Route path="*" element={<h1>404 PEJDŽ</h1>} /> 
    </Routes>
  );
};

export default memo(App);

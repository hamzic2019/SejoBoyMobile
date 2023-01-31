import React, { useState, useEffect, memo } from "react";
import './App.css'
import {Routes, Route} from 'react-router-dom';

// importing components
import HomeScreen from "./components/mobile/HomeScreen/HomeScreen";
import Vehicles from './components/mobile/Vehicles/Vehicles';
import CarItem from "./components/mobile/CarItem/CarItem";

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
      <Route path="/vehicles/bmw" element={deviceType === "mobile" ? (<CarItem />) : (<CarItem />)} />
      <Route path="/vehicles" element={deviceType === "mobile" ? (<Vehicles />) : (<Vehicles />)} />
      <Route path="/" element={deviceType === "mobile" ? (<HomeScreen />) : (<HomeScreen />)}/>
      <Route path="*" element={<h1>404 PEJDŽ</h1>} /> 
    </Routes>
  );
};

export default memo(App);

import React, { useState, useEffect, memo } from "react";
import HomeScreen from "./components/mobile/HomeScreen/HomeScreen";

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
      {deviceType === "mobile" ? (
        <HomeScreen />
      ) : (
        <HomeScreen />
      )}
    </div>
  );
};

export default memo(App);

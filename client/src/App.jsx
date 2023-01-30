import React, { useState, useEffect } from "react";

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
        <h1>MOBILNI TELEFON</h1>
      ) : (
        <h1>DESKTOP</h1>
      )}
    </div>
  );
};

export default App;

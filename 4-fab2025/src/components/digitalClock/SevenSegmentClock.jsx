import React, { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (num) => num.toString().padStart(2, "0");
  ;

  
  const hours = formatTime(time.getHours());

  const minutes = formatTime(time.getMinutes());

  
  const seconds = formatTime(time.getSeconds());

  
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          fontFamily: "monospace",
          fontSize: "60px",
          color: "red",
          backgroundColor: "black",
          padding: "20px",
          borderRadius: "10px",
          border: "4px solid red",
          display: "inline-block",
        }}
      >
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  );
};

export default DigitalClock;

import React, { useState, useRef, useEffect } from "react";
import './App.css'

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const hours = String(Math.floor(time / 3600000)).padStart(2, "0");
    const mins = String(Math.floor((time % 3600000) / 60000)).padStart(2, "0");
    const secs = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
    const millis = String(Math.floor((time % 1000) / 10)).padStart(2, "0");
    return `${hours}:${mins}:${secs}:${millis}`;
  };

  return (
    <div className="box">
      <div className="container">
        <h1>{formatTime()}</h1>
        <div className="buttons">
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App
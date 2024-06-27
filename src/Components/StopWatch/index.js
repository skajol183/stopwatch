import React, { useState, useEffect } from "react";
import "./index.scss";

const StopWatch = () => {
  const [isPause, setIsPause] = useState("Start");
  const [isReset, setIsReset] = useState(false);
  const [isStop, setIsStop] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
    if (isRunning === true) {
      setIsPause("Resume");
    } else {
      setIsPause("Pause");
    }
  };

  const handleStop = () => {
    setIsStop(true)
    setIsPause("Start");
    setIsRunning(false);
    setTimeout(() => {
      setElapsedTime(0);
    }, 2000);
  };

  const handleReset = () => {
    setIsReset(true);
    setIsPause("Start");
    setIsRunning(false);
    setElapsedTime(0);
  };

  const getFormattedTime = (time) => {
    const minutes = Math.floor(time / 60000)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((time / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const milliseconds = (time % 1000).toString().padStart(3, "0");
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className="app-container">
      <div className="stopwatch-container">
        <h1 className="stopwatch">Stopwatch</h1>
        <div className="timer-container">
          <div className="timer">
            <img
              className="timer-image"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="heading">Timer</p>
          </div>
          <h1 className="stopwatch-timer">{getFormattedTime(elapsedTime)}</h1>
          <div className="timer-buttons">
            <button
              type="button"
              className="start-button button"
              onClick={handleStartPause}
            >
              {isPause}
            </button>
            <button
              type="button"
              className="stop-button button"
              onClick={handleStop}
              disabled={!isRunning}
            >
              Stop
            </button>
            <button
              type="button"
              className="reset-button button"
              onClick={handleReset}
              disabled={!elapsedTime}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;

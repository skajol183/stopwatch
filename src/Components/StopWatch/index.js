import React from "react";
import "./index.scss";

const StopWatch = () => {
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
          <h1 className="stopwatch-timer">0</h1>
          <div className="timer-buttons">
            <button type="button" className="start-button button">
              Start
            </button>
            <button type="button" className="stop-button button">
              Stop
            </button>
            <button type="button" className="reset-button button">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;

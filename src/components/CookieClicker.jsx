import React, { useState } from "react";

const CookieClicker = () => {
  const [score, setScore] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setScore((prev) => prev + 1);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 100);
  };

  const handleReset = () => {
    setScore(0);
  };

  return (
    <div className="section cookie-section">
      <div className="component-content">
        <h2>Cookie Clicker</h2>
        <p className="score">Score: {score}</p>
        <div className="cookie-container">
          <button
            className={`cookie-button ${isClicked ? "clicked" : ""}`}
            onClick={handleClick}
            aria-label="Click to earn points"
          >
            <img src="/cookie.png" alt="Image of a Cookie" width="150" />
          </button>
          <button
            className="reset-button"
            onClick={handleReset}
            aria-label="Reset score"
          >
            Reset Score
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieClicker;

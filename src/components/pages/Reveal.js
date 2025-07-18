import React, { useState, useEffect } from 'react';
import './Reveal.css';

const ProgressBarReveal = () => {
  const [progress, setProgress] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [prizeAmount, setPrizeAmount] = useState(0);

  const startReveal = () => {
    setIsRevealing(true);
    setProgress(0);
    setPrizeAmount(0);
    setIsRevealed(false);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        setPrizeAmount(Math.floor((newProgress / 100) * 50000));
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsRevealed(true);
          setShowCelebration(true);
          setTimeout(() => setShowCelebration(false), 3000);
          return 100;
        }
        return newProgress;
      });
    }, 50);
  };

  const resetReveal = () => {
    setProgress(0);
    setIsRevealing(false);
    setIsRevealed(false);
    setShowCelebration(false);
    setPrizeAmount(0);
  };

  

  return (
    <div className="reveal-wrapper">
      {/* Celebration Particles */}
      

      <div className="reveal-container">
        <h1 className="reveal-header">CASH PRIZE</h1>
        <p className="reveal-subhead">
          {!isRevealing ? 'Ready to reveal your prize?' : 'Revealing your prize...'}
        </p>

        <div className="prize-card">
          <div className="poster-wrapper">
            <img
              src="https://res.cloudinary.com/detarpq3q/image/upload/v1752816288/CASH_PRIZE_ogqoac.svg"
              alt="Cash Prize Poster"
              className="poster-img"
              style={{ filter: `brightness(${0.01 + (progress/100)*0.8})` }}
            />
            <div
              className="poster-overlay"
              style={{
                clipPath: `inset(0 ${100 - progress}% 0 0)`,
                opacity: progress < 100 ? 0.8 : 0
              }}
            />
            {progress > 0 && (
              <div
                className="progress-glow"
                style={{ left: `${progress}%` }}
              />
            )}
            {progress < 100 && (
              <div className="poster-text">
                <div className="poster-amount">₹{prizeAmount.toLocaleString()}</div>
                <div className="poster-revealing">REVEALING...</div>
              </div>
            )}
          </div>

          <div className="progress-section">
            <div className="progress-label">Prize Reveal Progress: {Math.round(progress)}%</div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
              {progress > 0 && <div className="progress-indicator" style={{ left: `${progress}%` }}/>}
            </div>
            <div className="progress-marks">
              <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
            </div>
          </div>

          <div className="action-buttons">
            {!isRevealing ? (
              <button className="btn-reveal" onClick={startReveal}>
                REVEAL
              </button>
            ) : (
              <div className="in-progress">
                <div>{progress < 100 ? 'Calculating your prize...' : 'Prize revealed!'}</div>
                <br/>
                {progress >= 100 && (
                  <button className="btn-reset" onClick={resetReveal}>
                     REVEAL AGAIN
                  </button>
                )}
              </div>
            )}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default ProgressBarReveal;

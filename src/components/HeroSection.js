import React, { useState } from 'react';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section id="home">
      <div className="hero-container">
        
        {!videoLoaded && (
          <div className="mascot-loader">
            <img src="/assets/mascot.gif" alt="Loading..." />
          </div>
        )}

        <video
          src="./videos/final.mp4"
          autoPlay
          loop
          muted
          onCanPlayThrough={() => setVideoLoaded(true)}
          className={videoLoaded ? 'visible' : 'hidden'}
        ></video>
      </div>
    </section>
  );
}

export default HeroSection;

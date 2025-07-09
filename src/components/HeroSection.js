import React, { useState } from 'react';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section id="home">
      <div className='hero-container'>
        {!videoLoaded && (
          <div className="video-loader"></div>
        )}
        <video
          src="./videos/timeline.mov"
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className={`hero-video ${videoLoaded ? '' : 'hidden'}`}
        />
      </div>
    </section>
  );
}

export default HeroSection;

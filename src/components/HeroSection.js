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
          src="https://res.cloudinary.com/detarpq3q/video/upload/v1752245929/Timeline_pksyzp.mov"
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

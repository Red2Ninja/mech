// Mascot.js
import React, { useState } from 'react';
import './Mascot.css';
import mascotImage from '../assets/Mascot.png'; // update the path as needed

function Mascot() {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000); // reset after animation
  };

  return (
    <div className={`mascot-container ${animate ? 'jump-spin' : ''}`} onClick={handleClick}>
      <img src={mascotImage} alt="Mascot" />
      <p className='text'>Hi,I am Luma!</p>
    </div>
  );
}
/*https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4*/
export default Mascot;

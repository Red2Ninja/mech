// Cards.js
import React from 'react';
import OrangeCard from './About'; 
import './OrangeCard.css'; 

function AboutSection() {
  return (
    <div className='cards-container'>
      <h1 className='cards-title'>About Us</h1>
      <div className='cards-wrapper'>
        <OrangeCard />
      </div>
    </div>
  );
}

export default AboutSection;

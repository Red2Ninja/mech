// OrangeCard.js
import React from 'react';
import './OrangeCard.css'; 

function OrangeCard() {
  return (
    <div className='orange-card-container'>
      <div className='orange-card'>
        <h3 className='card-title'>What is Mechnovate?</h3>
        <p className='card-content'>
          Mechnovate is the largest and widely recognized 3-day symposium conducted by ASME-VIT. It focuses on innovation and advancements in mechanical engineering. Our motto is to attain insights from predecessors and reinvent ourselves by implementing future technology in Mechnovate 2025.
        </p>
      </div>
      <div className='orange-card'>
        <h3 className='card-title'>About ASME-VIT</h3>
        <p className='card-content'>
          We are a vibrant community of aspiring engineers at ASME-VIT, established in 2010. We focus on stimulating innovation, professional development, and networking for mechanical engineering students.
        </p>
      </div>
    </div>
  );
}

export default OrangeCard;

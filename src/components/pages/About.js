// OrangeCard.js
/*import React from 'react';
import './OrangeCard.css'; 

function OrangeCard() {
  return (
    

    <div className='orange-card-container'>
      <div className='orange-card'>
        <h3 className='card-title '>WHAT IS MECHNOVATE?</h3>
        <p className='card-content poppins-regular'>
          Mechnovate is the largest and widely recognized 3-day symposium conducted by ASME-VIT. It focuses on innovation and advancements in mechanical engineering. Our motto is to attain insights from predecessors and reinvent ourselves by implementing future technology in Mechnovate 2025.
        </p>
      </div>
      <div className='orange-card '>
        <h3 className='card-title '>About ASME-VIT</h3>
        <p className='card-content poppins-regular'>
          We are a vibrant community of aspiring engineers at ASME-VIT, established in 2010. We focus on stimulating innovation, professional development, and networking for mechanical engineering students.
        </p>
      </div>
    </div>
    

  );
}

export default OrangeCard;
*/

import React from 'react';
import './OrangeCard.css'; 
import Mascot from '../../assets/Mascot.png'; // Adjust path to your GIF

function AboutSection() {
  return (
    <section id="about">
    <div className='cards-container' id="about-us">
      {/*<h1 className='cards-title'>ABOUT US</h1>*/}
      <br/><br/><br/><br/>
      
      <div className='cards-wrapper'>
        {/* First Card - Mascot Left, Content Right */}
        <div className='orange-card'>
          <div className='card-mascot'>
            <img 
              src={Mascot} 
              alt="Mechnovate Mascot" 
              className='mascot-icon'
            />
          </div>
          <div className='card-content-section'>
            <h2 className='card-title'>WHAT IS MECHNOVATE?</h2>
            <p className='card-content'>
              Mechnovate is the largest and widely recognized 3 day symposium conducted by ASME-VIT. It focuses on innovation and advancements in the field of mechanical engineering. It has successfully gathered inquisitive and talented minds from all over India. Our motto is to attain insights from our predecessors on the conduction of events and reinventing ourselves while implementing future technology in Mechnovate 2024. It includes workshops, keynote sessions and competitions to foster collaboration and exchange of ideas among students, researchers, and professionals in the domain of mechanical engineering. Mechnovate takes place over the course of 3 days packed with premium events.
            </p>
          </div>
        </div>

        {/* Second Card - Content Left, Mascot Right */}
        <div className='orange-card reverse'>
          <div className='card-mascot'>
            <img 
              src={Mascot} 
              alt="ASME-VIT Mascot" 
              className='mascot-icon'
            />
          </div>
          <div className='card-content-section'>
            <h2 className='card-title'>ABOUT ASME-VIT</h2>
            <p className='card-content'>
              Mechnovate is the largest and widely recognized 3 day symposium conducted by ASME-VIT. It focuses on innovation and advancements in the field of mechanical engineering. It has successfully gathered inquisitive and talented minds from all over India. Our motto is to attain insights from our predecessors on the conduction of events and reinventing ourselves while implementing future technology in Mechnovate 2024. It includes workshops, keynote sessions and competitions to foster collaboration and exchange of ideas among students, researchers, and professionals in the domain of mechanical engineering. Mechnovate takes place over the course of 3 days packed with premium events.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default AboutSection;
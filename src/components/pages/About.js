import React from 'react';
import './OrangeCard.css'; 
 // Adjust path to your GIF

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
              src="https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752238901/Mascot_sbfexz.png"
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
              src= "https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752238901/Mascot_sbfexz.png"
              alt="ASME-VIT Mascot" 
              className='mascot-icon'
            />
          </div>
          <div className='card-content-section'>
            <h2 className='card-title'>ABOUT ASME-VIT?</h2>
            <p className='card-content'>
              We are a vibrant community of aspiring engineers dedicated to enhancing our skills and knowledge. Established in 2010 with the help of officials from ASME India, we have transpired to be one of the largest and the most distinguished student chapters directing our focus on stimulating innovation, fostering professional development, and networking opportunities. We impart a platform for students to explore their passion for mechanical engineering and make significant contributions to the field of mechanical engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default AboutSection;
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Cards.css'

function Cards() {
  
    const navigate = useNavigate();
    return (
    <section id= 'events' className="events-section">
      <h2 className="section-title ">Events</h2>

    <div className="event-grid">
        <div className="event-card" onClick={() => navigate('/Events/Competitions')}>
          <img src="https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237460/comp_pjay7m.png" alt="Competition" className="event-img" />
          <div className="event-title ">COMPETITION</div>
        </div>
        
        <div className="event-card" onClick={() => navigate('/Events/Workshops')}>
          <img src="https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237516/workshop_spe7a2.png" alt="Workshop" className="event-img" />
          <div className="event-title ">WORKSHOP</div>
        </div>
        
        <div className="event-card " onClick={() => navigate('/Events/Speakers')}>
          <img src="https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237506/speaker2_q9q70m.png" alt="Speaker session" className="event-img" />
          <div className="event-title ">KEYNOTE SESSIONS</div>
        </div>

        <div className="event-card " onClick={() => navigate('/Events/Mechathon')}>
          <img src="https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237480/mechathon4_o6e9zy.png" alt="mechathon" className="event-img" />
          <div className="event-title ">MECHATHON 4.0</div>
        </div>
    </div>
</section>

          
    
  );
}

export default Cards;




{/*import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carditems from './Carditems'
import './Cards.css'

function Cards() {
  return (
    <section id= "events">
    <div className = 'cards'>
        <div className = 'cards__container'>
            <div className="cards__wrapper">
                <div className="cards__items">
                  
                    <Carditems />
                    </div>
                </div>
            </div>
    </div>
    </section>
  )
}

export default Cards;*/}


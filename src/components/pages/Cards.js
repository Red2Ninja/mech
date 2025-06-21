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

import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Cards.css'

function Cards() {
  
    const navigate = useNavigate();
    return (
    <section class="events-section">
      <h2 class="section-title ">Events</h2>

    <div className="event-grid">
        <div className="event-card" onClick={() => navigate('/Events/Competitions')}>
          <img src="/images/comp.png" alt="Competition" className="event-img" />
          <div className="event-title ">COMPETITION</div>
        </div>
        
        <div className="event-card" onClick={() => navigate('/Events/Workshops')}>
          <img src="/images/workshop.png" alt="Workshop" className="event-img" />
          <div className="event-title ">WORKSHOP</div>
        </div>
        
        <div className="event-card " onClick={() => navigate('/Events/Speakers')}>
          <img src="/images/speaker2.png" alt="Speaker session" className="event-img" />
          <div className="event-title ">KEYNOTE SESSIONS</div>
        </div>

        <div className="event-card " onClick={() => navigate('/Events/Mechathon')}>
          <img src="/images/mechathon4.png" alt="mechathon" className="event-img" />
          <div className="event-title ">MECHATHON 4.0</div>
        </div>
    </div>
</section>

          
    
  );
}

export default Cards;


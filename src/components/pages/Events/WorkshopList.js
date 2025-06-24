import React from 'react';
import { Link } from 'react-router-dom';
import "./WorkshopList.css";
import './WorkshopDetails.css';

const workshops = [
  {
    id: 'Orbitron_A_cansat_Workshop',
    title: 'Orbitron-A cansat Workshop',
    image: '/images/event_logos/orbitron_2.png'
  },
  {
    id: 'HoverX',
    title: 'HoverX',
    image: '/images/event_logos/hoverX_3.png'
  },
];

function WorkshopsList() {
  return (
    <div className="workshops-list">
      <h2>All Workshop</h2>
      <ul>
        {workshops.map((workshop) => (
          <li key={workshop.id}>
            <Link to={`/Events/Workshops/${workshop.id}`} className="workshop-card-link">
              <div className="workshop-card">
                <img src={workshop.image} alt={workshop.title} />
                <div className="workshop-title">{workshop.title}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkshopsList;

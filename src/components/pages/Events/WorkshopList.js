import React from 'react';
import { Link } from 'react-router-dom';
import "./WorkshopList.css";
import './WorkshopDetails.css';

const workshops = [
  {
    id: 'Orbitron_A_cansat_Workshop',
    title: 'Orbitron-A cansat Workshop',
    image: 'https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752235533/orbitron_2_tkca0w.png'
  },
  {
    id: 'HoverX',
    title: 'HoverX',
    image: 'https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752235520/hoverX_3_z7kpyg.png'
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

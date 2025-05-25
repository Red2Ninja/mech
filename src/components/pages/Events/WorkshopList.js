import React from 'react';
import { Link } from 'react-router-dom';
import "./WorkshopList.css";
import './WorkshopDetails.css';

const workshops = [
  {
    id: 'Orbitron_A_cansat_Workshop',
    title: 'Orbitron-A cansat Workshop',
    image: '/images/bg.jpg'
  },
  {
    id: 'HoverX',
    title: 'HoverX',
    image: '/images/gears.jpeg'
  },
];

function WorkshopsList() {
  return (
    <div className="workshops-list">
      <h2>All Workshops</h2>
      <ul>
        {workshops.map((workshop) => (
          <li key={workshop.id}>
            <img src={workshop.image} alt={workshop.title} />
            <Link to={`/Events/Workshops/${workshop.id}`}>{workshop.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkshopsList;

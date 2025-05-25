import React from 'react';
import { Link } from 'react-router-dom';
import "./CompetitionList.css";
import './CompetitionDetails.css';

const competitions = [
  {
    id: 'Aerodash_2.0',
    title: 'Aerodash 2.0',
    image: '/images/bg.jpg'
  },
  {
    id: 'MarinaX',
    title: 'MarinaX',
    image: '/images/gears.jpeg'
  },
  {
    id: 'Mechnovate Drone Racing Challenge (MDRC)',
    title: 'Mechnovate Drone Racing Challenge (MDRC)',
    image: '/images/mdrc.jpg'
  },
];

function CompetitionsList() {
  return (
    <div className="competitions-list">
      <h2>All Competition</h2>
      <ul>
        {competitions.map((comp) => (
          <li key={comp.id}>
            <img src={comp.image} alt={comp.title} />
            <Link to={`/Events/Competitions/${comp.id}`}>{comp.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompetitionsList;

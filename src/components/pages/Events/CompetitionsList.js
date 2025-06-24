import React from 'react';
import { Link } from 'react-router-dom';
import "./CompetitionList.css";
import './CompetitionDetails.css';

const competitions = [
  {
    id: 'Aerodash 2.0',
    title: 'Aerodash 2.0',
    image: '/images/event_logos/aerodash_2.png'
  },
  {
    id: 'MarinaX',
    title: 'MarinaX',
    image: '/images/event_logos/marinaX_2.png'
  },
  {
    id: 'Mechnovate Drone Racing Challenge (MDRC)',
    title: 'Mechnovate Drone Racing Challenge (MDRC)',
    image: '/images/event_logos/mdrc_2.png'
  },
];

function CompetitionsList() {
  return (
    <div className="competitions-list">
      <h2>All Competition</h2>
      <ul>
        {competitions.map((comp) => (
          <li key={comp.id}>
            <Link to={`/Events/Competitions/${comp.id}`} className="competition-card-link">
              <div className="competition-card">
                <img src={comp.image} alt={comp.title} />
                {/*<div className="competition-title">{comp.title}</div>*/}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompetitionsList;

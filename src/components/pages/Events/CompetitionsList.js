import React from 'react';
import { Link } from 'react-router-dom';
import "./CompetitionList.css";
import './CompetitionDetails.css';

const competitions = [
  {
    id: 'Aerodash 2.0',
    title: 'Aerodash 2.0',
    image: 'https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752235415/aerodash_2_xsxlz3.png'
  },
  {
    id: 'MarinaX',
    title: 'MarinaX',
    image: 'https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752235487/marinaX_2_egb1a1.png'
  },
  {
    id: 'Mechnovate Drone Racing Challenge (MDRC)',
    title: 'Mechnovate Drone Racing Challenge (MDRC)',
    image: 'https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752235463/mdrc_2_ujfydh.png'
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

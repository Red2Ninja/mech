import React from 'react';
import { Link } from 'react-router-dom';
import "./CompetitionList.css"
import './CompetitionDetails.css'
const competitions = [
  { id: 'design-sprint', title: 'Design Sprint' },
  { id: 'code-mania', title: 'Code Mania' },
  { id: 'circuit-crunch', title: 'Circuit Crunch' },
];

function CompetitionsList() {
  return (
    <div className="competitions-list">
      <h2>All Competitions</h2>
      <ul>
        {competitions.map((comp) => (
          <li key={comp.id}>
            <Link to={`/Events/Competitions/${comp.id}`}>{comp.title}</Link>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompetitionsList;

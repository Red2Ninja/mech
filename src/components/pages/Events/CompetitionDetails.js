import React from 'react';
import { useParams } from 'react-router-dom';
import './CompetitionDetails.css';

const competitionData = {
  'Aerodash 2.0': {
    image: '/images/event_logos/aerodash.png', 
    pdf: 'https://drive.google.com/drive/folders/1bktuZ7YeGYWKSRcdw8hfOxHg4zEqpJud', 
    details: [
      'AeroDash 2.0 is a national-level aeromodelling competition that challenges teams to design, present, and fly innovative aircraft in Regular and Micro classes. Spanning three days, the event features technical presentations, rigorous inspections, and competitive flight rounds, culminating in a grand awards ceremony. With expert pilots, industry-level judging, and a focus on engineering excellence, AeroDash 2.0 offers participants a platform to showcase aeronautical ingenuity and teamwork in a dynamic, real-world competitive environment.',
      'Team Size: 4-5 members',
      'Registration Fee: 300 Rs',
    ],
    form: 'https://docs.google.com/forms/d/1nZ2XMWoFQBrENMXrsOt8NollGos862EcaXjhLpxBoGs/edit',
    payment: 'https://paymentgateway.com/design-sprint',
  },
  'MarinaX': {
    image: 'images/event_logos/marinaX',
    pdf: '/pdfs/code-mania-rules.pdf',
    details: [
      'An Autonomous Underwater Vehicle (AUV) competition designed to challenge teams in mission-based tasks such as precise navigation, object detection, and retrieval. Over the course of two days, participants will demonstrate their technical expertise and innovative approaches in underwater robotics. This event provides a platform for practical application of engineering principles, encouraging creativity and problem-solving in a competitive yet collaborative environment. Teams will be evaluated on performance, efficiency, and design excellence throughout the competition.',
      'Team Size: 4-5 members',
      'Registration Fee: 300 Rs',
    ],
    
    form: 'https://forms.gle/code-mania-form',
    payment: 'https://paymentgateway.com/code-mania',
  },
  'Mechnovate Drone Racing Challenge (MDRC)': {
    image: 'images/event_logos/mdrc',
    pdf: '/pdfs/circuit-crunch-rules.pdf',
    details: [
      'The Mechnovate Drone Racing Challenge, a two-day competition invites collegiate teams to showcase their self-built drones in a multi-stage contest. Participants will undergo technical inspection, deliver presentations, and compete in dynamic racing rounds featuring challenging obstacle courses. Judged on design, innovation, and piloting skills, MDRC aims to foster creativity, teamwork, and engineering excellence within the drone racing community.',
      'Team Size: 4-5 members',
      'Registration Fee: 300 Rs',
    ],
    form: 'https://forms.gle/circuit-crunch-form',
    payment: 'https://paymentgateway.com/circuit-crunch',
  },
};

function CompetitionDetails() {
  const { id } = useParams();
  const comp = competitionData[id];

  if (!comp) {
    return <div className="competition-details">Competition not found</div>;
  }

  return (
    <div className="competition-details">
      <div>
        <div>
          <h2>{id.replace('-', ' ').toUpperCase()}</h2>
          {Array.isArray(comp.details) ? (
            
              comp.details.map((item, index) => (
                <p key={index}>{item}</p>
              ))
            
          ) : (
            <p>{comp.details}</p>
          )}
          <a href={comp.pdf} target="_blank" rel="noopener noreferrer">📄 View Rules (PDF)</a><br />
          <a href={comp.form} target="_blank" rel="noopener noreferrer">📝 Register via Google Form</a><br />
          <a href={comp.payment} target="_blank" rel="noopener noreferrer">💳 Pay Entry Fee</a>
        </div>
        <div>
          <img src={comp.image} alt={id} />
        </div>
      </div>
    </div>
  );
}

export default CompetitionDetails;

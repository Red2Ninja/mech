import React from 'react';
import { useParams } from 'react-router-dom';
import './CompetitionDetails.css';

const competitionData = {
  'Aerodash 2.0': {
    image: 'https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752235143/AERODASH_POSTER_xeiipf.jpg', 
    pdf: 'https://drive.google.com/file/d/1ETnkXdR7cq1cHzeqEysA_ZGf_iZZ3KpU/view?usp=drive_link', 
    details: [
      'AeroDash 2.0 is a national-level aeromodelling competition that challenges teams to design, present, and fly innovative aircraft in Regular and Micro classes. Spanning three days, the event features technical presentations, rigorous inspections, and competitive flight rounds, culminating in a grand awards ceremony. With expert pilots, industry-level judging, and a focus on engineering excellence, AeroDash 2.0 offers participants a platform to showcase aeronautical ingenuity and teamwork in a dynamic, real-world competitive environment.',
      'Team Size: 5-12 members',
    ],
    form: 'https://forms.gle/BseRczBvXGJWDMgq5',
    payment: 'https://events.vit.ac.in/events/ASME',
  },
  'MarinaX': {
    image: 'https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752235174/Marinax_poster_hyfdrg.jpg',
    pdf: 'https://drive.google.com/file/d/1wHn-m-uyC-HS_h6ZGFGfkT39ynsfVARe/view?usp=sharing',
    details: [
      'An Autonomous Underwater Vehicle (AUV) competition designed to challenge teams in mission-based tasks such as precise navigation, object detection, and retrieval. Over the course of two days, participants will demonstrate their technical expertise and innovative approaches in underwater robotics. This event provides a platform for practical application of engineering principles, encouraging creativity and problem-solving in a competitive yet collaborative environment. Teams will be evaluated on performance, efficiency, and design excellence throughout the competition.',
      'Team Size: 5-12 members',
    ],
    
    form: 'https://forms.gle/XAkG1e21n62bUkEVA',
    payment: 'https://events.vit.ac.in/events/ASME',
  },
  'Mechnovate Drone Racing Challenge (MDRC)': {
    image: 'https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752235190/mdrc_klb0rw.jpg',
    pdf: 'https://drive.google.com/file/d/1r5wtmXcxuur-MaHNb89s_ElhZEU-t0xB/view?usp=drive_link',
    details: [
      'The Mechnovate Drone Racing Challenge, a two-day competition invites collegiate teams to showcase their self-built drones in a multi-stage contest. Participants will undergo technical inspection, deliver presentations, and compete in dynamic racing rounds featuring challenging obstacle courses. Judged on design, innovation, and piloting skills, MDRC aims to foster creativity, teamwork, and engineering excellence within the drone racing community.',
      'Team Size: 3-12 members',
    ],
    form: 'https://forms.gle/m8U6KChZMLiUqQEt7',
    payment: 'https://events.vit.ac.in/events/ASME',
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
          <a href={comp.payment} target="_blank" rel="noopener noreferrer">Pay Entry Fee</a><br />
          <a href={comp.form} target="_blank" rel="noopener noreferrer">Register via Google Form</a><br />
          <a href={comp.pdf} target="_blank" rel="noopener noreferrer">View Rules (PDF)</a><br />
          
          
        </div>
        <div>
          <img src={comp.image} alt={id} />
        </div>
      </div>
    </div>
  );
}

export default CompetitionDetails;

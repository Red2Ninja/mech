import React from 'react';
import './Mechathon.css';
import MechathonImg from '../../../assets/space.png'; // Ensure this path is correct

const Mechathon = () => {
  return (
    <section className="mechathon-details">
      <div className="session-container">
        {/* Content Card */}
        <div className="session-card session-text">
          <h2>MECHATHON 4.0</h2>
          <p>
            Mechathon 4.0 is an overnight CAD-based design marathon where interdisciplinary teams tackle real-world industrial challenges through innovative engineering solutions. Spanning ideation, modelling, simulation, and feasibility analysis, the event emphasizes creativity, technical rigor, and manufacturability. With mentorship from experts and structured evaluation across multiple phases—design, simulation, manufacturing planning, and innovation pitching—participants refine both their technical and presentation skills. Mechathon fosters collaborative problem-solving, encouraging future-ready engineering minds to design with purpose and innovation at the forefront.
          </p>
          <p><strong>Date:</strong> 28th September</p>
          <p><strong>Time:</strong> 3:00 PM – 5:00 PM</p>
          <p><strong>Entry Fee:</strong> Free</p>
          <a href="/pdfs/speaker_details.pdf" target="_blank" rel="noopener noreferrer">Meet the Speakers</a>
        </div>

        {/* Image Card */}
        <div className="session-card session-image">
          <img src={MechathonImg} alt="Mechathon Visual" />
        </div>
      </div>
    </section>
  );
};

export default Mechathon;

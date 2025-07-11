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
          <p>Team Size: 2-5 members</p>
          <a href="https://forms.gle/pYdSocSNs8QPH4on9" target="_blank" rel="noopener noreferrer">Register via Google Form</a><br/>
          <a href="https://events.vit.ac.in/events/ASME" target="_blank" rel="noopener noreferrer">Pay Entry Fee</a>
        </div>

        {/* Image Card */}
        <div className="session-card session-image">
          <img src='https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752235209/Mechathon_poster_uftogv.jpg' alt="Mechathon Visual" />
        </div>
      </div>
    </section>
  );
};

export default Mechathon;

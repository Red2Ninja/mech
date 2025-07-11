import React from 'react';
import './SpeakerSession.css';
import speakerImg from '../../../assets/space.png'; // Adjust path based on your folder structure

const SpeakerSession = () => {
  return (
    <section className="speaker-details">
      <div className="session-container">
        {/* Content Card */}
        <div className="session-card session-text">
          <h2>KEYNOTE SESSION</h2>
          <p>
           Keynote Sessions serve as a platform where industry leaders, academic professionals, and engineering enthusiasts converge to exchange knowledge and perspectives. Delivered by distinguished experts, each session delves into a focused technical theme, offering valuable insights drawn from real-world experience and current advancements. These talks aim to inspire, inform, and bridge the gap between theory and practice, fostering a deeper understanding of emerging trends and encouraging thoughtful discourse within the engineering and innovation community.
          </p>
          <a href="https://events.vit.ac.in/events/ASME" target="_blank" rel="noopener noreferrer">Pay Entry Fee</a>
        </div>

        {/* Image Card */}
        <div className="session-card session-image">
          <img src="https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752254970/sapentia_cxpdaf.jpg" alt="Speaker Session" />
        </div>
      </div>
    </section>
  );
};

export default SpeakerSession;
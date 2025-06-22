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
          <p><strong>Date:</strong> 28th September</p>
          <p><strong>Time:</strong> 3:00 PM – 5:00 PM</p>
          <p><strong>Entry Fee:</strong> Free</p>
          <a href="/pdfs/speaker_details.pdf" target="_blank" rel="noopener noreferrer">Meet the Speakers</a>
        </div>

        {/* Image Card */}
        <div className="session-card session-image">
          <img src={speakerImg} alt="Speaker Session" />
        </div>
      </div>
    </section>
  );
};

export default SpeakerSession;
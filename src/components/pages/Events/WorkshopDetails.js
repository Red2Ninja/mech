import React from 'react';
import { useParams } from 'react-router-dom';
import './WorkshopDetails.css';

const workshopData = {
  'Orbitron_A_cansat_Workshop': {
    title: 'Orbitron-A Cansat Workshop',
    image: '/images/event/image1.png', 
    pdf: '/docs/web_mini_project.pdf', 
    details: [
      'Orbitron is a comprehensive two-day workshop focused on the design, assembly, and operation of a miniature can satellite system. Participants will engage in theoretical sessions covering core components and wireless communication, followed by hands-on activities including sensor integration, wireless data transmission, and data logging. The workshop culminates in practical drop tests and data analysis, providing valuable insights into aerospace technology and embedded systems within a collaborative learning environment.',
      'Team Size: 4-5 members',
      'Registration Fee: 300 Rs',
    ],
    form: 'https://docs.google.com/forms/d/1nZ2XMWoFQBrENMXrsOt8NollGos862EcaXjhLpxBoGs/edit',
    payment: 'https://paymentgateway.com/design-sprint',
  },
  'HoverX': {
    title: 'HoverX',
    image: '/images/code.jpeg',
    pdf: '/pdfs/code-mania-rules.pdf',
    details: [
      'HoverX is a one-day hands-on workshop focused on the design and fabrication of functional hovercrafts. Participants work in teams to understand the principles of aerodynamics, propulsion, and stability through practical application. The session fosters innovation, teamwork, and technical creativity as students bring their prototypes to life. By the end of the workshop, each group would have constructed and tested a working hovercraft, gaining valuable experience in fabrication techniques and applied engineering problem-solving.',
      'Team Size: 4-5 members',
      'Registration Fee: 300 Rs',
    ],
    form: 'https://forms.gle/code-mania-form',
    payment: 'https://paymentgateway.com/code-mania',
  }
};

function WorkshopDetails() {
  const { id } = useParams();
  
  // Debug: Log the ID to see what we're receiving
  console.log('Workshop ID from params:', id);
  console.log('Available workshop keys:', Object.keys(workshopData));
  
  const workshop = workshopData[id];

  if (!workshop) {
    return (
      <div className="workshop-details">
        <h2>Workshop not found</h2>
        <p>Workshop ID: {id}</p>
        <p>Available workshops: {Object.keys(workshopData).join(', ')}</p>
      </div>
    );
  }

  return (
    <div className="workshop-details">
      <div>
        <div>
          <h2>{workshop.title}</h2>
          {Array.isArray(workshop.details) ? (
            workshop.details.map((item, index) => (
              <p key={index}>{item}</p>
            ))
          ) : (
            <p>{workshop.details}</p>
          )}
          <a href={workshop.pdf} target="_blank" rel="noopener noreferrer">📄 View Rules (PDF)</a><br />
          <a href={workshop.form} target="_blank" rel="noopener noreferrer">📝 Register via Google Form</a><br />
          <a href={workshop.payment} target="_blank" rel="noopener noreferrer">💳 Pay Entry Fee</a>
        </div>
        <div>
          <img src={workshop.image} alt={workshop.title} />
        </div>
      </div>
    </div>
  );
}

export default WorkshopDetails;
import React from 'react';
import { useParams } from 'react-router-dom';
import './WorkshopDetails.css';

const workshopData = {
  'Orbitron-A_cansat_Workshop': {
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
    image: 'images/code.jpeg',
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
  const comp = workshopData[id];

  if (!comp) {
    return <div className="workshop-details">Workshop not found</div>;
  }

  return (
    <div className="workshop-details">
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

export default WorkshopDetails;

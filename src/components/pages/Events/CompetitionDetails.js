import React from 'react';
import { useParams } from 'react-router-dom';
import './CompetitionDetails.css';

const competitionData = {
  'design-sprint': {
    image: '/images/event/image1.png', 
    pdf: '/docs/web_mini_project.pdf', 
    details: [
      'A fast-paced UX/UI design challenge to innovate under pressure.',
      'Team Size: 4-5 members',
      'Registration Fee: 300 Rs',
    ],
    form: 'https://docs.google.com/forms/d/1nZ2XMWoFQBrENMXrsOt8NollGos862EcaXjhLpxBoGs/edit',
    payment: 'https://paymentgateway.com/design-sprint',
  },
  'code-mania': {
    image: '/images/code.jpeg',
    pdf: '/pdfs/code-mania-rules.pdf',
    details: 'Competitive coding with mind-bending problems.',
    form: 'https://forms.gle/code-mania-form',
    payment: 'https://paymentgateway.com/code-mania',
  },
  'circuit-crunch': {
    image: '/images/circuit.jpeg',
    pdf: '/pdfs/circuit-crunch-rules.pdf',
    details: 'Hardware-level challenge for the electronics wizards.',
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

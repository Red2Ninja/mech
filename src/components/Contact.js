import React from 'react';
import './Contact.css';

const coordinators = [
  {
    name: 'Juee Patil',
    image: '/images/team/Zuiii.jpg',
    phone: '+91 9702180838',
    email: 'jueepatil0905@gmail.com'
  },
  {
    name: 'Vishal',
    image: '/images/team/vishal.png',
    phone: '+91 9123456789',
    email: 'vishal@gmail.com'
  }
];

function Contact() {
  return (
    <section className="contact-us" id="contact">
      <h2>Contact Us</h2>
      <div className="card-container">
        {coordinators.map((coordinator, index) => (
          <div className="contact-card" key={index}>
            <img src={coordinator.image} alt={coordinator.name} />
            <h3>{coordinator.name}</h3>
            <p><strong>Phone:</strong> {coordinator.phone}</p>
            <p><strong>Email:</strong> <a href={`mailto:${coordinator.email}`}>{coordinator.email}</a></p>
          </div>
        ))}
      </div>
      <div className="official-email">
        <p>For general queries, reach out to us at:</p>
        <p><strong>Email:</strong> <a href="mailto:mechnovate@gmail.com">mechnovate@vit.ac.in</a></p>
      </div>
    </section>
  );
}

export default Contact;

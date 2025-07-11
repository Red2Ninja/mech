import React from 'react';
import './Contact.css';

const coordinators = [
  {
    name: 'Juee Patil',
    image: 'https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237443/Zuiii_k1hnts.jpg',
    phone: '+91 9702180838',
    email: 'jueepatil0905@gmail.com'
  },
  {
    name: 'Vishal Singh',
    image: 'https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237437/vishal_gxtblg.png',
    phone: '+91 6393901409',
    email: 'Vishal.singh2022a@gmail.com'
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
        <p><strong>Email: </strong> <a href="mailto:mechnovate@gmail.com">mechnovate@vit.ac.in</a></p>
      </div>
    </section>
  );
}

export default Contact;

import React from 'react';
import './Location.css';

function Location() {
  return (
    <div className="location-container">
      <div className="location-text">
        <h2 className='stalinist-one-regular'>How to reach <span>VIT?</span></h2>
        <p className='card-content audiowide-regular'>
          VIT Vellore is located in Vellore, Tamil Nadu, India. It is accessible by road, rail, and air.
          The nearest airport is Chennai International Airport, which is approximately 130 km away from the campus.
          Other nearby airports include Bengaluru International Airport and Tirupati Airport.
          The nearest railway station is Katpadi Junction, which is approximately 3 km away from the campus.
          The campus is well connected by road, with frequent bus services available from nearby cities like Chennai,
          Bengaluru, and Hyderabad.
        </p>
      </div>
      <div className="location-map">
        <iframe
          title="VIT Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1556.4562427034746!2d79.15485232844449!3d12.969199395662985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479cdd994bc7%3A0xb9106fd37dc5a9e2!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1621343233762!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Location;

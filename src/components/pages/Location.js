import React from 'react';
import './Location.css';

function Location() {
  return (
    <div className="location-container">
      
      <div className="location-text">
        <h2 className="header">How to reach VIT?</h2>
        
        <section>
          <p className="card-content audiowide-regular">
            VIT Vellore is located in Vellore, Tamil Nadu, India, and is easily accessible by road, rail, and air. The nearest railway station is Katpadi Junction, just 3 km from the campus. The closest airport is Chennai International Airport, located approximately 130 km away. Other nearby airports include Bengaluru International Airport and Tirupati Airport. Regular bus services also connect VIT to cities like Chennai, Bengaluru, and Hyderabad.
          </p>
        </section>

        <h2 className="header">Accommodation</h2>

        <section>
          <h3 className='subheader'>On-Campus Accommodation (VIT Hostels)</h3>
          <p>
            For participants who wish to stay within the VIT Vellore campus during MECHNOVATE 2025, limited hostel accommodation is available on a first-come, first-serve basis.
          </p>
          <ul>
            <li>Register for accommodation via the official <a href="https://docs.google.com/forms/u/2/d/1Y7INqdRCpIMVrZ1lfnwsSUdBbdJUHVteHURYldXL0Q8/edit?usp=drivesdk&ouid=109256938644453135898&chromeless=1" target="_blank" rel="noopener noreferrer">Ladies Hostel Form</a>.</li>
            <li>Register for accommodation via the official <a href="https://docs.google.com/forms/u/2/d/1GwQ9CKHdgu5Xlemx9urYOo7lhaePlLYj8E0mgUeWKvQ/edit?usp=drivesdk&ouid=109256938644453135898&chromeless=1" target="_blank" rel="noopener noreferrer">Men’s Hostel Form</a>.</li>
            <li>Pay for the accommodation upon arrival at the campus.</li>
            <li>Ensure that you have completed the payment for your respective event before submitting the accommodation form.</li>
          </ul>
          <p><strong>Note:</strong> Hostel beds are limited, so we strongly encourage early registration to secure a spot.</p>
        </section>

        <section>
          <h3 className='subheader'>Off-Campus Accommodation</h3>
          <p>
            If you prefer to arrange your own stay outside the campus, we’ve attached a curated list of hotels and lodging options located near the VIT Vellore campus for your convenience. Kindly make your bookings in advance to ensure availability and a comfortable experience.
          </p>
          <ul>
            <li>Treebo Kingsbury Fiesta</li>
            <li>Rangalaya Royal</li>
            <li>Hotel Park Inn</li>
            <li>Annai Residency</li>
            <li>Darling Residency</li>
            <li>Hotel Benzz Park</li>
            <li>Hotel Palm Tree</li>
          </ul>
        </section>

        <p className="audiowide-regular">We look forward to welcoming you to <strong>MECHNOVATE 2025</strong>!</p>
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

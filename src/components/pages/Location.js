import React from 'react';
import './Location.css';

function Location() {
  return (
    <div className="location-container">
      <div className="location-text">
        
        <h2 className='stalinist-one-regular'>How to reach <span>VIT?</span></h2>
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
        <p className='card-content audiowide-regular'>

          <br/>
          <br/>
          Please note that accommodation will not be provided by the organizing team of Mechnovate. All participants are required to make their own lodging arrangements for the duration of their stay. To assist with this process, a curated list of hotels and lodging options located in close proximity to the event venue is attached below. We recommend booking in advance to ensure availability and a comfortable stay.
<ul>
<li>Treebo Kingsbury Fiesta</li>
<li>Rangalaya Royal</li>
<li>Hotel Park Inn</li>
<li>Annai Residency</li>
<li>Darling Residency</li>
<li>Hotel Benzz Park</li>
<li>Hotel Palm Tree</li>
</ul>
          

        </p>
      </div>
      
    </div>
  );
}

export default Location;

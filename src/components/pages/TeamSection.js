import React from 'react';
import './TeamSection.css';

const teamMembers = [
  {
    name: 'Dr. G. Viswanathan',
    position: 'Founder & Chancellor, VIT',
    bio: 'Chief Patron',
    image: 'https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237441/vishwa_n2zwek.jpg',
  },
  {
    name: 'Dr. VS Kanchana Bhaskaran',
    position: 'Vice Chancellor, VIT',
    bio: 'Co-Patron',
    image: 'https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237428/kanchana_hkmpky.jpg',
  },
  {
    name: 'Dr. Paratha Sarathi Mallick',
    position: 'Pro Vice Chancellor, VIT',
    bio: 'Co-Patron',
    image: 'https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237434/partha_limv6a.png',
  },
  {
    name: 'Dr. Naiju C.D. ',
    position: 'Director Of Student Welfare',
    bio: 'Symposium Chair',
    image: 'https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237431/naiju_m9cwn8.jpg',
  },
  {
    name: 'Dr. Anthony Xavior M',
    position: 'Dean, Academics',
    bio: 'ASME-VIT Advisor',
    image: 'https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237419/anthony_fjexvr.jpg',
  },
  {
    name: 'Dr. Jeyapandiarajan P',
    position: 'Associate Professor, School of Mechanical Engineering',
    bio: 'Convenor',
    image: 'https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237421/Jeya_plsk2t.jpg',
  },
  {
    name: 'Dr. Joel J',
    position: 'Associate Professor Senior, School of Mechanical Engineering',
    bio: 'Co-Convenor',
    image: 'https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237425/joel_ublotq.png',
  },
  
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2 className='card-title stick-no-bills'> Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-img-wrap">
              <img src={member.image} alt={member.name} className="team-img" />
            </div>
            <div className="team-info ">
              <h4>{member.name}</h4>
              <p className="team-position">{member.position}</p>
              {member.bio && <p className="team-bio">{member.bio}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

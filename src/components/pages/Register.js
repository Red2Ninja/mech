import React, { useState, useEffect } from 'react';
import './Register.css';

const steps = [
  {
    id: 1,
    title: "Select Your Event",
    description: `• Browse through the list of available events and workshops.
• Choose the one you wish to participate in.`,
    image: "/images/masc1.png",
  },
  {
    id: 2,
    title: "Make the Payment",
    description: `• Click on the payment link provided on the event or workshop page.
For Team Events:
• Only one team member (preferably the Team Captain) needs to make the payment on behalf of the entire team.
For Workshops:
• Each participant must make their own individual payment.`,
    image: "/images/masc2.png",
  },
  {
    id: 3,
    title: "Complete the Google Form",
    description: `For Team Events:
• After payment, the Team Captain must fill out the Google Form with:
  ◦ Payment details
  ◦ Team members’ information
For Workshops:
• Each individual must fill out the Google Form with their own payment and personal details.`,
    image: "/images/masc3.png",
  },
  {
    id: 4,
    title: "Confirmation of Registration",
    description: `• Registration is considered complete only after:
  ◦ Successful payment
  ◦ Accurate completion of the Google Form` ,
    image: "/images/masc4.png",
  },
  {
    id: 5,
    title: "Access Event Info",
    description: `• You can find Rulebooks and Guidelines on the respective event pages.
• Make sure to read them carefully to understand the event requirements.`,
    image: "/images/masc5.png",
  },
  {
    id: 6,
    title: "Contact & Queries",
    description: `For Queries & FAQs:
• Join the group linked below for answers to frequently asked questions and real-time updates.
• You can also contact us directly for further assistance.`,
    image: "/images/masc6.png",
    link: {
    text: "Join Whatsapp Group",
    url: "https://chat.whatsapp.com/DZhQp0jZNh1J8Y85ZzJ4S6?mode=r_t"  // ← Replace with your actual link
  }
  },
];

function RegisterQuest() {
  const [active, setActive] = useState(0);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function getTimeRemaining() {
    const eventDate = new Date("2025-08-07T00:00:00");
    const now = new Date();
    const diff = eventDate - now;

    return diff <= 0
      ? { days: 0, hours: 0, minutes: 0, seconds: 0 }
      : {
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        };
  }

  const step = steps[active];

  return (
    <>
      <h2 className="main-heading">Event Registration Guidelines</h2>

      <section className="modern-register-section" id="register">
        <div className="register-container">
          {/* Left Step List */}
          <div className="step-list">
            {steps.map((s, idx) => (
              <div
                key={s.id}
                className={`step-item ${active === idx ? 'active' : ''}`}
                onMouseEnter={() => setActive(idx)}
              >
                <span className="step-number">{String(s.id).padStart(2, '0')}</span>
                <div className="step-content">
                    <h3>{s.title}</h3>
                    <p className="multiline-text">{s.description}</p>

                    {/* Conditionally render link if it exists */}
                    {s.link && (
                        <div className="step-link">
                        <a href={s.link.url} target="_blank" rel="noopener noreferrer">
                             {s.link.text}
                        </a>
                        </div>
                    )}
                    </div>

                <div className="step-arrow">→</div>
              </div>
            ))}
          </div>

          {/* Right Image + Timer */}
          <div className="step-details">
            <div className="details-wrapper">
              <img src={step.image} alt={step.title} />
            </div>

            <div className="countdown-timer">
              <h3>Countdown to Event</h3>
              <div className="timer-boxes">
                <div className="timer-unit">
                  <span className="time">{timeLeft.days}</span>
                  <span className="label">Days</span>
                </div>
                <div className="timer-unit">
                  <span className="time">{timeLeft.hours}</span>
                  <span className="label">Hrs</span>
                </div>
                <div className="timer-unit">
                  <span className="time">{timeLeft.minutes}</span>
                  <span className="label">Min</span>
                </div>
                <div className="timer-unit">
                  <span className="time">{timeLeft.seconds}</span>
                  <span className="label">Sec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterQuest;

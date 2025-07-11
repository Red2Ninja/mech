import React, { useState, useEffect } from 'react';
import './Register.css';

const steps = [
  {
    id: 1,
    title: "Select Your Event",
    short: "Choose your event or workshop.",
    image: "/images/masc1.png",
  },
  {
    id: 2,
    title: "Make the Payment",
    short: "Secure your slot.",
    image: "/images/masc2.png",
  },
  {
    id: 3,
    title: "Fill the Google Form",
    short: "Submit your details.",
    image: "/images/masc3.png",
  },
  {
    id: 4,
    title: "Confirm Registration",
    short: "You're almost there!",
    image: "/images/masc4.png",
  },
  {
    id: 5,
    title: "Access Event Info",
    short: "Get prepped.",
    image: "/images/masc5.png",
  },
  {
    id: 6,
    title: "Contact & Queries",
    short: "Need help?",
    image: "/images/masc6.png",
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
                  <p>{s.short}</p>
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
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterQuest;

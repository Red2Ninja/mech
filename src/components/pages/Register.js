import React, { useState } from 'react';
import './Register.css';

const steps = [
  {
    id: 1,
    title: "Select Your Event",
    short: "Choose your event or workshop.",
    description:
      "Browse through the available events and workshops, and choose the one you wish to participate in.",
    image: "/images/masc1.png",
    tags: ["Explore", "Events", "Workshops"]
  },
  {
    id: 2,
    title: "Make the Payment",
    short: "Secure your slot.",
    description:
      "Click on the payment link provided. One member pays for team events; individuals for workshops.",
    image: "/images/masc2.png",
    tags: ["UPI", "Secure", "Team"]
  },
  {
    id: 3,
    title: "Fill the Google Form",
    short: "Submit your details.",
    description:
      "Enter payment and team details in the provided form to ensure you're listed.",
    image: "/images/masc3.png",
    tags: ["Google Form", "Details"]
  },
  {
    id: 4,
    title: "Confirm Registration",
    short: "You're almost there!",
    description:
      "Registration is confirmed once both the payment and form are completed.",
    image: "/images/masc4.png",
    tags: ["Confirmed", "Checklist"]
  },
  {
    id: 5,
    title: "Access Event Info",
    short: "Get prepped.",
    description:
      "Review the rulebooks and details available for the event or workshop.",
    image: "/images/masc5.png",
    tags: ["Rules", "Guide"]
  },
  {
    id: 6,
    title: "Contact & Queries",
    short: "Need help?",
    description:
      "Join our info group or contact the organizing team for any queries.",
    image: "/images/masc6.png",
    tags: ["Support", "Help"]
  },
];

function RegisterQuest() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <>
      <h2 className="main-heading">Event Registration Guidelines</h2>
      
      <section className="modern-register-section" id="register">
        <div className="register-container">
          {/* Left: Step List */}
          <div className="step-list">
            {steps.map((s, idx) => (
              <div
                key={s.id}
                className={`step-item ${active === idx ? "active" : ""}`}
                onMouseEnter={() => setActive(idx)}
              >
                <span className="step-number">{String(s.id).padStart(2, "0")}</span>
                <div className="step-content">
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                </div>
                <div className="step-arrow">→</div>
              </div>
            ))}
          </div>

          {/* Right: Only Image */}
          <div className="step-details">
            <div className="details-wrapper">
              <img src={step.image} alt={step.title} />
              <div className="step-id-watermark">{String(step.id).padStart(2, "0")}</div>
              <div className="step-number-watermark">{String(step.id).padStart(2, '0')}</div>
            </div>
          </div>
        </div>
        

      </section>
    </>
  );
}

export default RegisterQuest;

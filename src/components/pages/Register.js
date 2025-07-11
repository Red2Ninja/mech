import React from 'react';
import './Register.css';

function RegisterQuest() {
  const steps = [
    {
      id: 1,
      title: "Select Your Event",
      mission: "Browse through the available events and workshops, and choose the one you wish to participate in.",
    },
    {
      id: 2,
      title: "Make the Payment",
      mission: "Click on the payment link provided on the event or workshop page. One member pays for team events; individuals pay for workshops.",
    },
    {
      id: 3,
      title: "Fill the Google Form",
      mission: "Enter your payment details and team information (if applicable) in the provided Google Form.",
    },
    {
      id: 4,
      title: "Confirm Registration",
      mission: "Your registration is confirmed only after both payment and form submission.",
    },
    {
      id: 5,
      title: "Access Event Information",
      mission: "Read the rulebooks and event guidelines available on the respective pages.",
    },
    {
      id: 6,
      title: "Contact & Queries",
      mission: "Join our official group for updates or contact the organizing team for assistance.",
    },
  ];

  return (
    <section className="quest-section" id="register">
      <h2 className="quest-heading">Event Registration Guidelines</h2>
      <p className="quest-subtext">Follow these steps to successfully register for your desired event or workshop:</p>

      <div className="quest-grid">
        {steps.map((step, index) => (
          <div
            className="quest-card"
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="quest-level">Step {step.id}</div>
            <h3 className="quest-title">{step.title}</h3>
            <p className="quest-mission">{step.mission}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RegisterQuest;

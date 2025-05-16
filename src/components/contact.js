import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");

  const handleClick = (e) => {
    if (!name.trim() || !place.trim()) {
      e.preventDefault();
      alert("Please enter both your name and place before booking a service.");
    }
  };

  const message = `Hi, I am ${name} from ${place}. I'm interested in your cleaning services.`;
  const whatsappLink = `https://wa.me/918075562609?text=${encodeURIComponent(message)}`;

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Your Space Deserves to Shine</h1>
      <h1 className="primary-heading">Let’s Make It Sparkle Together!</h1>
      <div className="contact-form-container">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="secondary-button no-underline"
          onClick={handleClick}
        >
          Book A Service Now
        </a>
      </div>
    </div>
  );
};

export default Contact;

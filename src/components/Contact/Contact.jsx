import React, { useState } from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "a175bdcd-4e16-4c65-8ffc-944f5115416c"); // your Web3Forms key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully ✅");
      event.target.reset();
    } else {
      setResult("Something went wrong ❌");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="contact-card">
          <h3>
            <FaPhoneAlt /> Phone
          </h3>
          <p>
            <a href="tel:+917418500927">+91 7418500927</a>
          </p>
        </div>

        <div className="contact-card">
          <h3>
            <FaMapMarkerAlt /> Location
          </h3>
          <p>Chennai, India</p>
        </div>
      </div>

      {/* Social Media */}
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/dilliraja-l-b92262266/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/dilliraja7"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a href="mailto:dillirajagopal7@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        <p>{result}</p>
      </div>
    </section>
  );
};

export default Contact;

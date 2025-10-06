import React from "react";
import "./Resume.css";

const Resume = () => (
  <section id="resume" className="resume">
    <div className="resume-container">
      <h2>My Resume</h2>
      <a 
        href=" /ReactPortfolio/dilli.pdf "   
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn"
      >
        Download Resume
      </a>
    </div>
  </section>
);

export default Resume;

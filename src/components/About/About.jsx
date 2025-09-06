import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      {/* Intro Section */}
      <div className="about-intro">
        <p>
          I’m <strong>Dilliraja L</strong>, an enthusiastic Information Technology student passionate about deep learning, web development, and problem-solving. 
          My work focuses on building impactful solutions that combine technology and innovation — from healthcare applications like Alzheimer’s detection to 
          secure banking systems. I enjoy turning ideas into real-world projects and continuously expanding my knowledge in AI, data science, cloud technologies, 
          and software engineering.
        </p>
      </div>

      {/* Education Section */}
      <h3>Education</h3>
      <div className="education-grid">
        <div className="edu-card">
          <h4>B.Tech – Information Technology</h4>
          <p>Vel Tech Multi Tech</p>
          <span>2021–2025 | CGPA: <b>8.36</b></span>
        </div>
        <div className="edu-card">
          <h4>HSC</h4>
          <p>Sri Ayyan Vidyashram Higher Secondary School</p>
          <span>2021 | <b>90.83%</b></span>
        </div>
        <div className="edu-card">
          <h4>SSLC</h4>
          <p>Vaariar Matric Higher Secondary School</p>
          <span>2019 | <b>89%</b></span>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "./Skills.css";

const Skills = () => {
  const codingSkills = ["Java", "HTML", "CSS", "SQL", "JavaScript", "AWS (EC2, S3)"];
  const softSkills = ["Teamwork", "Time Management", "Leadership", "Adaptability"];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-section">
        <h3>Coding Skills</h3>
        <div className="skills-list">
          {codingSkills.map((skill, index) => (
            <span key={index} className="skill-badge coding">{skill}</span>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h3>Soft Skills</h3>
        <div className="skills-list">
          {softSkills.map((skill, index) => (
            <span key={index} className="skill-badge soft">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

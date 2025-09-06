import React from "react";
import "./Certification.css";

const Certifications = () => {
  const certList = [
    "Programming in Java – NPTEL",
    "Introduction to Cyber Security – OpenEDG",
    "Python with Data Science – Vel Tech University",
    "Information Security Awareness – Fortinet",
    "Python – Pantech Learning",
  ];

  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <ul>
        {certList.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;

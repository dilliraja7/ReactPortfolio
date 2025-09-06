import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        
        {/* Project 1 */}
        <div className="project">
          <img src="" alt="" />
        <div>


          <h3>Alzheimer’s Detection Using Deep Learning</h3>
          <p>
            Developed a CNN + LSTM deep learning model using MRI scan images for
            early-stage Alzheimer’s detection. The model achieved 97% accuracy
            and enhanced healthcare AI research.
          </p>
          <ul className="tech-list">
            <li>Python</li>
            <li>MATLAB</li>
            <li>CNN</li>
            <li>LSTM</li>
            <li>Medical Imaging</li>
          </ul>
          <a
            href="https://github.com/dilliraja7/Alzheimer-Disease-Detection-using-Matlab-Ensemble-model-with-PET-Scans"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            🔗 View Project
          </a>
        </div>
        </div>

        {/* Project 2 */}
        <div className="project">
          <h3>Internet Banking Application</h3>
          <p>
            Built a secure and scalable internet banking platform with modules
            for user authentication, fund transfers, transaction history, and
            account management.
          </p>
          <ul className="tech-list">
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Apache Tomcat</li>
            <li>MySQL</li>
          </ul>
          <a
            href="https://github.com/dilliraja7/Banking-Application"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            🔗 View Project
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;

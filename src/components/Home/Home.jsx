import React from "react";
import "./Home.css";

const Home = () => (
  <section id="home" className="home">
    <div className="home-content">
      <div className="home-text">
        <h1>
          Hi, I'm <span className="highlight">Dilliraja L</span>
        </h1>
        <p className="tagline">
          Java Developer | AI Enthusiast | Problem Solver
        </p>
        <p className="desc">
          I specialize in creating modern, responsive web applications and
          developing AI-based solutions for real-world challenges.
        </p>
        <div className="buttons">
          <a href="#about" className="btn primary">About Me</a>
          <a href="#projects" className="btn secondary">My Projects</a>
        </div>
      </div>
      <div className="home-image">
        <img src="profile.jpg" alt="Profile" />
      </div>
    </div>
  </section>
);

export default Home;

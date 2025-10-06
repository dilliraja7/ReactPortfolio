import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>Dilliraja L</h2>
      <div className="ham" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>{" "}
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#certifications">Certifications</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#achievements">Achievements</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

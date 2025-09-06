import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Certifications from "./components/Certifications/Certifications";
import Projects from "./components/Project/Projects";
import Achievements from "./components/Achievements/Achievements";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Achievements />
      <Resume />
      <Contact />
    </div>
  );
};

export default App;

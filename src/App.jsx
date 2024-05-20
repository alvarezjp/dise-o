import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import AboutMe from "./components/aboutMe/AboutMe";
import Skills from "./components/skills/Skills";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
};

export default App;

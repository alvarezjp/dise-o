import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home"
import AboutMe from "./components/aboutMe/AboutMe";
import Skills from "./components/skills/Skills";




const App = () => {
  return (
    <>
   <Navbar/>
   <Home/>
   <AboutMe/>
   <Skills/>
    </>
  );
};

export default App;

import React from "react";
import Cars from "./Cars";
import "./style.css";

const Projects = () => {
  return (
    <section className="projectSection">
      <article className="cardContainer">
        <p className="titleProject">Proyectos</p>
        <article className="boxCards">
          <Cars />
          <Cars />
          <Cars />
          <Cars />
        </article>
        <p className="seeMore">Ver más</p>
      </article>
      <p className="contactMe">Contact Me</p>
    </section>
  );
};

export default Projects;

import React from "react";
import Cards from "./Cards";
import "./style.css";

const Projects = () => {
  return (
    <section className="projectSection">
      <article className="cardContainer">
        <p className="titleProject">Proyectos</p>
        <article className="boxCards">
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </article>
        <p className="seeMore">Ver más</p>
      </article>
      <p className="contactMe">Contact Me</p>
    </section>
  );
};

export default Projects;

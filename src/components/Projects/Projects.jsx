import React from "react";
import Cards from "./Cards";
import "./style.css";
import data from "./projects.json";

const Projects = () => {
  return (
    <section className="projectSection">
      <article className="cardContainer">
        <p className="titleProject">Projects</p>
        <article className="boxCards">
          {data.data.map((info) => {
            return <Cards project={info} key={info.id} />;
          })}
        </article>
        {/* <p className="seeMore">Ver más</p> */}
      </article>
      <p className="titleContactMe">Contact Me</p>
    </section>
  );
};

export default Projects;

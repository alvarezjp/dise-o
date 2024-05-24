import ViewProject from "./ViewProject";
import { useState } from "react";
import "./styleCard.css";
// import data from "./projects.json"

const Cards = ({ project }) => {
  const [isHobered, setIsHoberes] = useState(false);

  return (
    <section
      className="wrapper"
      onMouseEnter={() => setIsHoberes(true)}
      onMouseLeave={() => setIsHoberes(false)}>
      {isHobered ? <ViewProject info={project} /> : ""}

      <article
        key={project.id}
        className={`card ${isHobered ? "hovered" : ""}`}
        style={{ backgroundImage: `url(./img/${project.url})` }}>
        <section className="Incard">
          <h2 className="titleCard">{project.title}</h2>
          <h3 className="subTitleCard">{project.subTitle}</h3>
          <section className="boxSkills">
            {project.skills.map((item, key) => {
              return (
                <p key={key} className="skills">
                  {item}
                </p>
              );
            })}
          </section>
        </section>
      </article>
    </section>
  );
};

export default Cards;

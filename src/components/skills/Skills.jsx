import React from "react";
import "./style.css";

const Skills = () => {
  const arrayIcons = Array.from({ length: 9 }, (_, index) => index + 1);
  return (
    <section className="skills">
      <article className="contain">
        {arrayIcons.map((item, index) => {
          return (
            <img
              key={index}
              src={`./icons/skills${item}.png`}
              alt="Iconos de skills"
              className="iconSkills"
            />
          );
        })}
      </article>
    </section>
  );
};

export default Skills;

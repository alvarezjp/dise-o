import React from "react";
import "./style.css";

const Skills = () => {
  const mouseDown = () => {
    console.log("click down");
  };

  const mouseUp = () => {
    console.log("click up");
  };

  const mouseMove = () => {
    console.log("Mouse Move");
  };

  const arrayIcons = Array.from({ length: 9 }, (_, index) => index + 1);
  return (
    <section className="skills">
      <article
        className="contain"
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        onMouseMove={mouseMove}>
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

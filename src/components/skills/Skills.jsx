import React from "react";
import "./style.css";

const Skills = () => {
  const arrayIcons = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <section className="skills">
      {arrayIcons.map((item,index) => {
        return (
          <>
            {/* <img key={item} src={`./icons/skills${item}.png`} alt="" />` */}
          </>
        );
      })}
    </section>
  );
};

export default Skills;

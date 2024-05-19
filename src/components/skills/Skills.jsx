import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SkillsContainer = styled.section`
  padding: 0px 21px;
  box-sizing: border-box;
  height: 180px;
  overflow: hidden;
  align-content: center;
  background-color: var(--color2);
  /* border: 3px solid black; */
`;

const ContainArticle = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  box-sizing: border-box;

  /* border: 3px solid red; */
`;
const IconSkills = styled.img`
  width: 96px;
  height: 96px;
  /* border: 3px solid blue; */
`;

const Skills = () => {
  const arrayIcons = Array.from({ length: 9 }, (_, index) => index + 1);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 100,
    slidesToShow: 3, // Ajusta según la cantidad de íconos visibles al mismo tiempo
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000, // Ajusta la velocidad de autoplay
    pauseOnHover: true,
  };

  return (
    <SkillsContainer>
      <Slider {...settings}>
        {arrayIcons.map((item, index) => (
          <>
            <ContainArticle>
              <IconSkills
                key={index}
                src={`./icons/skills${item}.png`}
                alt="Iconos de skills"
                className="iconSkills"
              />
            </ContainArticle>
          </>
        ))}
      </Slider>
    </SkillsContainer>
  );
};

export default Skills;

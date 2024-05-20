import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SkillsContainer, ContainArticle, IconSkills } from "./style";

const Skills = () => {
  const arrayIcons = Array.from({ length: 9 }, (_, index) => index + 1);


  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000, // Ajusta la velocidad de autoplay
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 2250,
        settings: {
          arrows: true,
        },
      },
     
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 629,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 1000,
        },
      },
    ],
  };

  return (
    <SkillsContainer>
      <Slider {...settings}>
        {arrayIcons.map((item, index) => (
          <div key={index}>
            <ContainArticle >
              <IconSkills
                src={`./icons/skills${item}.png`}
                alt="Iconos de skills"
                className="iconSkills"
              />
            </ContainArticle>
          </div>
        ))}
      </Slider>
    </SkillsContainer>
  );
};

export default Skills;

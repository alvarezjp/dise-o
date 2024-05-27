import React from "react";
import "./styleLet.css";

const LetIsWork = () => {
  return (
    <section className="letIsWork">
      <p className="contactTitle">TRABAJEMOS JUNTOS</p>
      <p className="contactSubTitle">Hablemos</p>
      <p className="contactText">
        Optimiza tu presencia en línea con soluciones adaptadas a tu empresa.
        Como profesional en desarrollo web, estoy aquí para convertir tus ideas
        en resultados tangibles. ¡Contacta hoy y llevemos tu negocio al
        siguiente nivel digital juntos!
      </p>
      <img
        src="/icons/github.svg"
        alt="icono gitHub"
        className="contactIcons"
      />
      <img
        src="/icons/linkedin.svg"
        alt="icono de linkdIn"
        className="contactIcons"
      />
    </section>
  );
};

export default LetIsWork;

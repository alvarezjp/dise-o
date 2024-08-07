import React from "react";
import "./styleLet.css";

const LetIsWork = () => {
  const icons = [
    {name:"github",url:"https://github.com/alvarezjp"},
    {name:"linkedin",url:"https://www.linkedin.com/in/jesusalvarezpasmino/"}
  ]
  
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
      {icons.map((item,key) => {
        return (
          <img
            src={`/icons/${item.name}.svg`}
            alt={`icono de ${item.url}`}
            className="contactIcons"
            key={key}
            onClick={() => window.open(item.url)}
          />
        );
      })}
    </section>
  );
};

export default LetIsWork;

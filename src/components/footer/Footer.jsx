import React from "react";
import "./style.css"
const Footer = () => {
    const urlBehance = () => {
        window.open("https://www.behance.net/frandvisual?tracking_source=search_projects%7Ceasdgc+fotografia")
    }
  return (
    <footer className="footer">
      <section>
        <a href="#"> <img src="./img/logo.svg" alt="Logotipo" className="logoFooter"/></a>
      </section>
      <section className="sectionName">
        <p className="textFooter">© 2022-2024 Jesús Álvarez.</p>
        <p className="textFooter">Todos los derechos reservados.</p>
      </section>
      <section className="sectionDesigner"> 
        <p className="textFooter">Diseñado por </p>
        <p className="designer" onClick={urlBehance}>Fran.dvisual</p>
      </section>
    </footer>
  );
};

export default Footer;

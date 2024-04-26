import React from "react";

function Text() {
   const altura = window.innerHeight;
   const calculo = altura * 0.5;

  return (
    <article className="article">
      <h2 className="homeText">Creando experiencias digitales , {altura},{calculo}</h2>
    </article>
  );
}

export default Text;

import React from "react";
import "./styleForm.css"

const Form = () => {
  return (
    <article className="formContact">
        <h2 className="formTitle">Formulario de contacto</h2>
      <div className="boxInput">
        <label htmlFor="name" className="labelForm">Nombre</label>
        <input type="text" name="name" placeholder="Nombre"  className="formInput"/>
      </div>
      <div className="boxInput">
        <label htmlFor="email" className="labelForm">Correo electrónico</label>
        <input type="email" name="email" placeholder="correo@mail.com" className="formInput" />
      </div>
      <div className="boxInput">
        <label htmlFor="comment" className="labelForm">Comentario</label>
        <textarea name="comment"placeholder="Escribe aqui..." className="formInput formTextArea"></textarea>
      </div>
      <button type="submit" className="formButton">ENVIAR</button>
    </article>
  );
};

export default Form;

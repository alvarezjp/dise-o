import React from "react";
import "./styleForm.css";
import { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const formSubmit = (event) => {
    event.preventDefault();
    console.log("se detuvo del envio");
  };
  return (
    <form className="formContact" autocomplete="off" onSubmit={formSubmit}>
      <h2 className="formTitle">Formulario de contacto</h2>
      <div className="boxInput">
        <label htmlFor="name" className="labelForm">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          value={inputValue.name}
          placeholder="Nombre"
          className="formInput"
          required
        />
      </div>
      <div className="boxInput">
        <label htmlFor="email" className="labelForm">
          Correo electrónico
        </label>
        <input
          type="email"
          name="email"
          placeholder="correo@mail.com"
          className="formInput"
          required
        />
      </div>
      <div className="boxInput">
        <label htmlFor="comment" className="labelForm">
          Comentario
        </label>
        <textarea
          name="comment"
          placeholder="Escribe aqui..."
          className="formInput formTextArea"
          required></textarea>
      </div>
      <button type="submit" className="formButton">
        ENVIAR
      </button>
    </form>
  );
};

export default Form;

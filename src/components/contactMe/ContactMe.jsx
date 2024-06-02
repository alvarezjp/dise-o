import React from "react";
import LetIsWork from "./letIsWork/LetIsWork";
import Form from "./form/Form";
import "./style.css"


const ContactMe = () => {
  return (
    <article className="articleContactMe" >
      <LetIsWork/>
      <Form/>
    </article>
  );
};

export default ContactMe;

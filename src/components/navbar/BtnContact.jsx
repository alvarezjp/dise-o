import React from "react";
import { useMediaQuery } from "react-responsive";
// import "./styled.css"

function BtnContact() {
  const desktop = useMediaQuery({ minWidth: 1250 });
  return <>{desktop && <button className="btnContact">Contact me</button>}</>;
}

export default BtnContact;

import React from "react";
import LiTablet from "./LiTablet";
import { useMediaQuery } from "react-responsive";
import IconMenu from "./IconMenu";
import "./style.css";

function Navbar() {
  const viewPhone = useMediaQuery({minWidth:580});
  return (
    <nav className="nav">
      <img src="./img/logo.svg" alt="Logo" className="divLogo" />
      <ul className="navList">
       {
        viewPhone ? <LiTablet/> : <IconMenu/>
       }
       
      </ul>
      <button className="btnContact">Contact me</button>
    </nav>
  );
}

export default Navbar;

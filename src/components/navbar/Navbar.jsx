import React from "react";
import BtnContact from "./BtnContact";
import LiSection from "./LiSection";
import "./styled.css"
import { useMediaQuery } from "@react-hook/media-query";

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/img/logo.svg" alt="logo" className="logo" />
      <LiSection />
      <BtnContact className="contact"/>
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import BtnContact from "./BtnContact";
import LiSection from "./LiSection";
import "./style.css"
import { useMediaQuery } from "@react-hook/media-query";

function Navbar() {
  return (
    <nav className="navbar">
     <a href="#"><img src="/img/logo.svg" alt="logo" className="logo" /></a> 
      <LiSection />
      <BtnContact  />
    </nav>
  );
}

export default Navbar;

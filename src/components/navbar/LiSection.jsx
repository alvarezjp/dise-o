import React from "react";
import { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import ItemsLi from "./ItemsLi";
import BoxList from "./BoxList";

const LiSection = () => {
  const desktop = useMediaQuery("(min-width: 990px)");
  const [btnAction, setBtnAction] = useState(true);
  const btnToggle = () => {
    setBtnAction(!btnAction);
  };
  return (
    <>
      {desktop ? (
        <>
          <ItemsLi />
        </>
      ) : btnAction ? (
        <>
          <AiOutlineMenu
            onClick={btnToggle}
            className="hamburguerMenu"
          />
        </>
      ) : (
        <>
          <GrClose
            onClick={btnToggle}
            className="closeMenu"
          />
          <BoxList/>
        </>
      )}
    </>
  );
}

export default LiSection;

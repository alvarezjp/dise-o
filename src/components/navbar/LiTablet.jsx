import React from "react";
import { useMediaQuery } from "react-responsive";

function LiTablet() {
  let options = ["Home", "About Me", "Skills", "Project"];
  const viewTablet = useMediaQuery({ maxWidth: 834 });
  const viewPhone = useMediaQuery({maxWidth:430})
  if (viewTablet&&!viewPhone) {
    options = options.filter((option) => option !== "About Me");
  }
  return (
    <>
      {options.map((option, index) => (
        <li key={index}>{option}</li>
      ))}
    </>
  );
}

export default LiTablet;

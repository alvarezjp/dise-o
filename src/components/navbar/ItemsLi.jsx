import React from "react";
import { useMediaQuery } from "react-responsive";

function ItemsLi() {
  let menu = ["Home", "About Me", "Skills", "Projects"];
  const phone = useMediaQuery({maxWidth: 430});
  const desktop = useMediaQuery({maxWidth: 990});
  
  if (desktop || phone) {
    menu = menu.filter((items) => items != "Home").concat("Contact me");
  }

 
  return (
    <ul className="itemsLi">
        {menu.map((items) => (
          <li key={items}>{items}</li>
        ))}
    </ul>
  );
}

export default ItemsLi;

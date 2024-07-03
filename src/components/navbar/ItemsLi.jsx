import React from "react";
import { useMediaQuery } from "react-responsive";

function ItemsLi({btnToggle}) {
  let menu = ["Home", "About Me", "Skills", "Projects"];
  const phone = useMediaQuery({maxWidth: 430});
  const desktop = useMediaQuery({maxWidth: 1250});
  
  if (desktop || phone) {
    menu = menu.filter((items) => items != "Home").concat("Contact me");
  }

 
  return (
    <ul className="itemsUl">
        {menu.map((items) => (
          <li key={items}><a onClick={btnToggle} href={`#${items}`} className="itemsLi">{items}</a></li>
        ))}
    </ul>
  );
}

export default ItemsLi;

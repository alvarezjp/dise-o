import React from "react";
import { useMediaQuery } from "react-responsive";

function ItemsLi() {
  let menu = ["Home", "About Me", "Skills", "Projects"];
  const phone = useMediaQuery({maxWidth: 430});
  const tablet = useMediaQuery({maxWidth: 834});
  
  if (tablet || phone) {
    menu = menu.filter((items) => items != "Home").concat("Contact me");
    console.log("entro en el If");
    console.log("los valores son",phone,tablet)
  }

  if(phone){
    console.log("el valor de phone es ", phone);
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

import React from "react";
import "./styleCard.css";

const ViewProject = ({info}) => {
    const click = () => {
        window.open(`${info.link}`, '_blank');
    }
  return <button onClick={click} className="LinkButton" >View Project</button>;
};

export default ViewProject;

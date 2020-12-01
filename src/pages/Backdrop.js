import React from "react";
import "./Backdrop.css";

const Backdrop = (props) => {
  return (
    <div
      className="backdrop"
      onClick={props.click}
      style={{ cursor: "pointer" }}
    ></div>
  );
};

export default Backdrop;

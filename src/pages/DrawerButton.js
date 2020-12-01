import React from "react";
import "./DrawerButton.css";

const DrawerButton = (props) => {
  return (
    <div className="drawerbutton" onClick={props.click}>
      <div className="drawerbutton__line"></div>
      <div className="drawerbutton__line"></div>
      <div className="drawerbutton__line"></div>
    </div>
  );
};

export default DrawerButton;

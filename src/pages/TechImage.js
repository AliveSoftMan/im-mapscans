import React from "react";
import "./TechImage.css";
import BaSlider from "./BaSlider.js";

function TechImage() {
  return (
    <div className="techimage">
      <div className="techimage__header">
        <h4>IMAGES POWERED BY SCIENCE</h4>
        <h1>Merging photography with technology</h1>
        <h3>
          Using state of the art of technology, we help you get the most out of
          every shot.
        </h3>
      </div>
      <div className="techimage__slider">
        <BaSlider />
      </div>
    </div>
  );
}

export default TechImage;

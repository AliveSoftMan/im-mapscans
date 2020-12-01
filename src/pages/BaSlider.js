import React from "react";
import before from "../Images/before.jpg";
import after from "../Images/after.jpg";
import ReactCompareImage from "react-compare-image";

function BaSlider() {
  return (
    <div>
      <ReactCompareImage
        leftImage={before}
        rightImage={after}
        leftImageLabel="Professional Photo"
        rightImageLabel="MapScans HDR"
        sliderLineColor="#6156fb"
        sliderLineWidth="4"
      />
    </div>
  );
}

export default BaSlider;

import React from "react";
import "./Floorplan.css";
import FloorplanCard from "./FloorplanCard";
import floorplan from "../Images/floorplan.png";

function Floorplan() {
  return (
    <div className="floorplan">
      <div className="floorplan__header">
        <div className="floorplan__headerContent">
          <h1>Floor plan</h1>
        </div>

        <h3>
          Comprehensive, accurate floor plans generated using InsideMaps
          Technology.
        </h3>
      </div>
      <div className="floorplan__item">
        <div className="floorplan__itemLeft">
          <FloorplanCard src={floorplan} title="2D floor plan" />
        </div>
        <div className="floorplan__itemRight">
          <FloorplanCard
            src="https://cache.insidemaps.com/stage-b/release-20082804/images/example-3dtour.png"
            title="3D floor plan"
          />
        </div>
      </div>
    </div>
  );
}

export default Floorplan;

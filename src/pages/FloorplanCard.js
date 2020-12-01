import React from "react";
import "./FloorplanCard.css";

function FloorplanCard({ src, title }) {
  return (
    <div className="floorplanCard">
      <img src={src} alt="" />
      <div className="floorplanCard__info">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default FloorplanCard;

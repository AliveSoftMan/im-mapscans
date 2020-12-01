import React from "react";
import "./TourCard.css";

function TourCard({ src, title, link }) {
  return (
    <div className="tourcard" onClick={() => window.open(link, "_blank")}>
      <img src={src} alt="" />
      <div className="tourcard__info">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default TourCard;

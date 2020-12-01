import React from "react";
import "./ProcessCard.css";

function ProcessCard({ number, title, description }) {
  return (
    <div className="processcard">
      <div className="processcard__number">
        <h1>{number}</h1>
      </div>
      <div className="processcard__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
    </div>
  );
}

export default ProcessCard;

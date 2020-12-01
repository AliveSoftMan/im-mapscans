import React from "react";
import "./TourPageResult.css";

function TouPageResult({ src, title, link }) {
  return (
    <div className="tourpageresult" onClick={() => window.open(link, "_blank")}>
      <img src={src} alt="" />
      <div className="tourpageresult__info">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default TouPageResult;

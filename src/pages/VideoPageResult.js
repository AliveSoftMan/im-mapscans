import React from "react";
import "./VideoPageResult.css";

function TouPageResult({ src, title, link }) {
  return (
    <div
      className="videopageresult"
      onClick={() => window.open(link, "_blank")}
    >
      <img src={src} alt="" />
      <div className="videopageresult__info">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default TouPageResult;

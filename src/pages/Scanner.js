import React from "react";
import "./Scanner.css";
import ScannerForm from "./ScannerForm";
import ProcessCard from "./ProcessCard";

function Scanner() {
  return (
    <div className="scanner">
      <div className="scanner__header">
        <h1>More shoots. More freedom.</h1>
        <h2>Are you a photographer? Looking for opportunities?</h2>
        <h3>
          Kick-start your career with MapScans. Be part of a dynamic,
          growth-oriented group of professionals. Hone your skills with us. We
          help you gain exposure by working with some of the top brands in the
          country. Have flexible schedules. Take on as many projects you can
          handle!
        </h3>
      </div>
      <div className="process__card">
        <ProcessCard
          number="1"
          title="Have a chat"
          description="We will provide you with everything you need to get started. Tell us about your portfolio and experience."
        />
        <ProcessCard
          number="2"
          title="Schedule"
          description="We’ll give you a schedule based on current demand, and your preference."
        />
        <ProcessCard
          number="3"
          title="Get paid"
          description="Submit your work and get paid."
        />
      </div>
      <div className="scanner__form">
        <h2>Sign up here</h2>
        <ScannerForm />
      </div>
    </div>
  );
}

export default Scanner;

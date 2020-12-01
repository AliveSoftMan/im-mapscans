import React from "react";
import "./TourPage.css";
import TourPageResult from "./TouPageResult";
import tour6 from "../Images/tour6.jpg";
import tour7 from "../Images/tour7.jpg";
import tour8 from "../Images/tour8.jpg";
import tour9 from "../Images/tour9.jpg";
import tour10 from "../Images/tour10.jpg";
import tour11 from "../Images/tour11.jpg";
import tour12 from "../Images/tour12.jpg";
import tour13 from "../Images/tour13.jpg";
import tour14 from "../Images/tour14.jpg";
import tour15 from "../Images/tour15.jpg";
import tour16 from "../Images/tour16.jpg";
import tour17 from "../Images/tour17.jpg";

function TourPage() {
  return (
    <div className="tourpage">
      <div className="tourpage__header">
        <h4>EFFORTLESS MARKETING</h4>
        <h1>3D Tour</h1>
        <h3>
          Listing homes up for sale has never been this easy. Consistent,
          high-definition 3D tours have been proven to generate significantly
          better results.
        </h3>
      </div>
      <div className="tourpage__card">
        <TourPageResult
          link="https://www.insidemaps.com/app/walkthrough-v2/?projectId=refVsLohxt&env=production"
          src={tour6}
          title="27809 N Giddiyup Trail, Phoenix, AZ, USA"
        />
        <TourPageResult
          link="https://www.insidemaps.com/app/walkthrough-v2/?projectId=zlnH8yBCqg&env=production"
          src={tour7}
          title="22664 Sylvan Way, Monte Rio, CA, 95462, USA"
        />
        <TourPageResult
          link="https://www.insidemaps.com/app/walkthrough-v2/?projectId=mDQdJU8QkK&env=production"
          src={tour8}
          title="12318 Piping Rock Dr, Houston, TX, 77077, USA"
        />
        <TourPageResult
          link="https://www.insidemaps.com/app/walkthrough-v2/?projectId=5aGdMUKGM2&env=production"
          src={tour9}
          title="4443 E Scenic Drive, Gatlinburg, TN, 37738, USA"
        />
      </div>
      <div className="tourpage__card">
        <TourPageResult
          link="https://www.insidemaps.com/app/walkthrough-v2/?projectId=mEmKXtUQPa&env=production"
          src={tour10}
          title="3826 Sundance Hill Lane, Sugar Land, TX, USA"
        />
        <TourPageResult
          link="https://www.insidemaps.com/app/walkthrough-v2/?projectId=B26Fyg5hpM&env=production"
          src={tour11}
          title="3510 Ten Oaks Ct, Powder Springs, GA, 30127, USA"
        />
        <TourPageResult
          link="https://www.insidemaps.com/app/walkthrough-v2/?projectId=wusoAl5auZ&env=production"
          src={tour12}
          title="2410 Cleghorn Street, Honolulu, Hawaii, 96815, USA"
        />
        <TourPageResult
          link="https://www.insidemaps.com/app/walkthrough-v2/?projectId=RKMCKowaE6&env=production"
          src={tour13}
          title="1606 Blue Heron Ln, Jacksonville Beach, FL, 32250, USA"
        />
      </div>
      <div className="tourpage__card">
        <TourPageResult
          link="https://www.insidemaps.com/app/walkthrough-v2/?projectId=BWSi67lD8b&env=production"
          src={tour14}
          title="1263 Pinnacle Court, Park City, UT, 84060, USA"
        />
        <TourPageResult
          link="https://www.insidemaps.com/app/walkthrough-v2/?projectId=u5ae1jRCOk&env=production"
          src={tour15}
          title="650 Station View Run, Lawrenceville, GA, 30043, USA"
        />
        <TourPageResult
          link="https://www.insidemaps.com/app/walkthrough-v2/?projectId=nmPBZH622N&env=production"
          src={tour16}
          title="1013 Trailwood Drive, Desoto, TX, 75115, USA"
        />
        <TourPageResult
          link="https://www.insidemaps.com/app/walkthrough-v2/?projectId=Y8A1Tl0RxD&env=production"
          src={tour17}
          title="304 Bayberry Dr, Fate, TX, 75087, USA"
        />
      </div>
    </div>
  );
}

export default TourPage;

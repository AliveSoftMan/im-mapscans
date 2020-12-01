import React from "react";
import "./VideoPage.css";
import VideoPageResult from "./VideoPageResult";
import tour18 from "../Images/tour18.jpg";
import tour19 from "../Images/tour19.jpg";
import tour20 from "../Images/tour20.jpg";
import tour21 from "../Images/tour21.jpg";
import tour22 from "../Images/tour22.jpg";
import tour23 from "../Images/tour23.jpg";

function VideoPage() {
  return (
    <div>
      <div className="videopage__header">
        <h4>STUNNING DETAILS LIKE NEVER BEFORE</h4>
        <h1>
          Get more potential buyers through your listing with a Video Tour
        </h1>
        <h3>
          Never worry about subpar videos for your listings ever again. We
          ensure quality for every shot- be it one, or a thousand listings.
        </h3>
      </div>
      <div className="videopage__card">
        <VideoPageResult
          link="https://www.youtube.com/watch?v=zuhHSMGcEnU&list=PLYsrWrgPisaXay8qTg-eKGNxU85apqNyz&index=6"
          src={tour19}
          title="InsideMaps 3D Tour Video Walkthrough"
        />
        <VideoPageResult
          link="https://www.youtube.com/watch?v=3kSPQ6Udqag&list=PLYsrWrgPisaXay8qTg-eKGNxU85apqNyz&index=3"
          src={tour18}
          title="100 Crescent Avenue walkthrough"
        />
        <VideoPageResult
          link="https://www.youtube.com/watch?v=KF1zMShKWVU&list=PLYsrWrgPisaXay8qTg-eKGNxU85apqNyz&index=4"
          src={tour20}
          title="1013 Trailwood Drive walkthrough"
        />
      </div>
      <div className="videopage__card">
        <VideoPageResult
          link="https://www.youtube.com/watch?v=vzo5Cd7Fh9I&list=PLYsrWrgPisaXay8qTg-eKGNxU85apqNyz&index=1"
          src={tour21}
          title="141 Siena Drive walkthrough"
        />
        <VideoPageResult
          link="https://www.youtube.com/watch?v=wi1CqE0jlnU&list=PLYsrWrgPisaXay8qTg-eKGNxU85apqNyz&index=2"
          src={tour22}
          title="3826 Sundance Hill Lane walkthrough"
        />
        <VideoPageResult
          link="https://www.youtube.com/watch?v=Kmrjmy-Q52E&list=PLYsrWrgPisaXay8qTg-eKGNxU85apqNyz&index=5"
          src={tour23}
          title="27809 N Giddiyup Trail Walkthrough"
        />
      </div>
    </div>
  );
}

export default VideoPage;

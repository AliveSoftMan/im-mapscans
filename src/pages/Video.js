import React from "react";
import "./Video.css";
import { Button } from "@material-ui/core";
import homeVideo from "./homeVideo.mp4";

import { useHistory } from "react-router-dom";

function Video(id) {
  const history = useHistory();
  return (
    <div className="video" id={id}>
      <div className="video__header">
        <div className="video__headerContent">
          <h1>Video Tour</h1>
          <Button
            variant="contained"
            onClick={() => history.push("/videotour")}
          >
            Explore more
          </Button>
        </div>

        <h3>
          With InsideMaps Technology, your listings can now feature full 3D
          video tours of your apartments.
        </h3>
      </div>

      <div className="video__container">
        <div className="video__containerItem">
          <video autoPlay muted loop>
            <source src={homeVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Video;

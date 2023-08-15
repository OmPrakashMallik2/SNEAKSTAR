import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="Video">
      <video autoPlay muted loop>
        <source src={require("../Media/shoes_ad.mp4")} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;

import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="Video">
      <video controls>
        <source src={require("./video.mov")} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;

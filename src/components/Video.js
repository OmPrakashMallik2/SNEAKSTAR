import React from "react";

function Video() {
  return (
    <div className="Video">
      <video controls>
        <source src={require("../Media/video.mov")} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;

import React from "react";

function Video() {
  return (
    <div className="Video">
      <video autoPlay>
        <source src={require("../Media/shoes_ad.mp4")} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;

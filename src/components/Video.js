import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import "./Video.css"; // Import your CSS file for styling

function Video() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="Video">
      <video ref={videoRef} autoPlay onClick={togglePlay}>
        <source src={require("../Media/shoes_ad.mp4")} type="video/mp4" />
      </video>
      <div className="play-pause-button" onClick={togglePlay}>
        <FontAwesomeIcon
          icon={isPlaying ? faPlay : faPause}
          className="icon"
        />
      </div>
    </div>
  );
}

export default Video;

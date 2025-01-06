import React from "react";
import "./Video.css";
import VideoDisplay from "../../assets/TravelingPenang.mp4";

const Video = () => {
  return (
    <section className="Video-wrapper">
      <div className="Video-container">
        <div className="overlay"></div>
        <video src={VideoDisplay} autoPlay loop muted />
        <div className="content">PENANG SPOT LIGHT</div>
      </div>
    </section>
  );
};

export default Video;
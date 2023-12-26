import React from "react";

function VideoCard({ data }) {
  return (
    <div className="col-4">
      <video src={data.link} className="img-fluid "></video>
    </div>
  );
}

export default VideoCard;

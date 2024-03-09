import React, { useRef } from "react";
import "./VideoPlayer.css";
import vidoe from "../../assets/vidoe.mp4";

function VideoPlayer({ setPlayState, playState }) {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  return (
    <div
      className={`video-play ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={vidoe} autoPlay muted controls></video>
    </div>
  );
}

export default VideoPlayer;

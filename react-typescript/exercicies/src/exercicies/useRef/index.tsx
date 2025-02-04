import React from "react";

import Video from "../../assets/video.mp4";

import "./styles.css";

const PlayVideo = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const [isVideoPaused, setIsVideoPaused] = React.useState<boolean>(
    videoRef.current?.paused || true
  );

  const onPlayOrPause = () => {
    if (!videoRef.current) return;

    setIsVideoPaused(!videoRef.current.paused);
    return isVideoPaused ? videoRef.current.play() : videoRef.current.pause();
  };

  const advanceVideo = () => {
    if (!videoRef.current) return;

    videoRef.current.currentTime = videoRef.current.duration + 2;
  };

  const updatePlaybackRate = (videoSpeed: number) => {
    if (!videoRef.current) return;

    videoRef.current.playbackRate = videoSpeed;
  };

  const updateMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
  };

  return (
    <div>
      <div className="players">
        <button onClick={onPlayOrPause}>
          {isVideoPaused ? "Play" : "Pause"}
        </button>
        <button onClick={advanceVideo}>+ 2s</button>
        <button onClick={() => updatePlaybackRate(1)}>1x</button>
        <button onClick={() => updatePlaybackRate(2)}>2x</button>
        <button>PiP</button>
        <button onClick={updateMute}>M</button>
      </div>

      <video src={Video} ref={videoRef} autoPlay={false} loop={true}></video>
    </div>
  );
};

export default PlayVideo;

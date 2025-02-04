import React from "react";

import Video from "../../assets/video.mp4";

import "./styles.css";

const PlayVideo = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = React.useState(false);

  const advanceVideo = () => {
    if (!videoRef.current) return;

    videoRef.current.currentTime += 2;
  };

  const changePlaybackRate = (videoSpeed: number) => {
    if (!videoRef.current) return;

    videoRef.current.playbackRate = videoSpeed;
  };

  const changeMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
  };

  const pictureInPicture = async () => {
    if (!videoRef.current) return;

    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await videoRef.current.requestPictureInPicture();
    }
  };

  return (
    <div>
      <div className="players">
        {playing ? (
          <button onClick={() => videoRef.current?.pause()}>Pause</button>
        ) : (
          <button onClick={() => videoRef.current?.play()}>Play</button>
        )}
        <button onClick={advanceVideo}>+ 2s</button>
        <button onClick={() => changePlaybackRate(1)}>1x</button>
        <button onClick={() => changePlaybackRate(2)}>2x</button>
        <button onClick={pictureInPicture}>PiP</button>
        <button onClick={changeMute}>M</button>
      </div>

      <video
        loop
        controls
        src={Video}
        ref={videoRef}
        autoPlay={false}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      ></video>
    </div>
  );
};

export default PlayVideo;

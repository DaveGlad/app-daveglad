import React, { useRef, useState, useEffect } from "react";

//!ASSETS
import s from "./assets/style.module.css";

const SoundBar = () => {
  const ref = useRef<HTMLAudioElement | any>(null);
  const [click, setClick] = useState(false);
  const [audio, setAudio] = useState<any>(null);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  const isPlay = { animationPlayState: click ? "running" : "paused" };
  // const sound = "../../assets/audio/u-said-it-v13-1167.mp3";

  useEffect(() => {
    // setAudio(new Audio(sound)); // only call client
  }, []);

  return (
    <div className={s.box} onClick={() => handleClick()}>
      <div className={s.line} style={isPlay} />
      <div className={s.line} style={isPlay} />
      <div className={s.line} style={isPlay} />
      <div className={s.line} style={isPlay} />
      <div className={s.line} style={isPlay} />

      <audio src={"../../assets/audio/u-said-it-v13-1167.mp3"} ref={ref} loop />
    </div>
  );
};

export default SoundBar;

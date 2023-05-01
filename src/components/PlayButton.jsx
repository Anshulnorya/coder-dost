import { useState } from "react";
import "./Playbutton.css";

function PlayButton({ children, onPlay, onPause }) {
  const [playing, setPlaying] = useState(false);
  const handleClick = (e) => {
    playing ? onPause() : onPlay();
    setPlaying(!playing);
  };

  return (
    <>
      <button onClick={handleClick}>
        {children} {playing ? "▐▐" : "▶"}
      </button>
    </>
  );
}
export default PlayButton;

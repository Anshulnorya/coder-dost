import "./App.css";
import "./components/Video.css";
import "./components/PlayButton"
import Video from "./components/Video";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";


function App() {
  return (
    <div className="App">
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        ></Video>
      ))}
      <div style={{clear:"both"}}>
      <PlayButton  message="me hu Play button" onSmash={()=>console.log("play")}>Play</PlayButton>
      {/* <PlayButton  message="me hu Pause button"onSmash={()=>console.log("play")}>Pause</PlayButton> */}
      </div>
    </div>
  );
}

export default App;

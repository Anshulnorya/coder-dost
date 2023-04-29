import "./App.css";
import "./components/Video.css";
import "./components/PlayButton";
import Video from "./components/Video";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";

function App() {
  return (
    <div
      className="App"
      onClick={() => {
        console.log("hello");
      }}
    >
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            onPlay={() => console.log("Playing", video.title)}
            onPause={() => {
              console.log("Paused", video.title);
            }}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </div>
  );
}

export default App;

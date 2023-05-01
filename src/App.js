import "./App.css";
import "./components/Video.css";
import "./components/PlayButton";
import videoDB from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import { useState } from "react";

function App() {
  const [videos, setVideos] = useState(videoDB);
  const addVideos = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  };
  return (
    <div
      className="App"
      onClick={() => {
        console.log("hello");
      }}
    >
      <AddVideo addVideos={addVideos}></AddVideo>

      <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default App;

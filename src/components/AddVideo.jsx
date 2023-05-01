import React, { useState } from "react";
import "./AddVideo.css";
const initialState={
    time: "1 month ago",
    channel: "Demo K Vlogs",
    verified: true,
    title: "",
    views: ""
}
function AddVideo({ addVideos }) {
  const [video, setVideo] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    addVideos(video);
    setVideo(initialState)
  };
  const handleChange = (e) => {
    e.stopPropagation();
    setVideo({ ...video, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form action="">
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
          value={video.title}
        />
        <input
          type="text"
          name="views"
          placeholder="views"
          onChange={handleChange}
          value={video.views}
        />

        <button onClick={handleSubmit}>Add Video</button>
      </form>
    </>
  );
}

export default AddVideo;

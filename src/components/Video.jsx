import "./Video.css";

function Video({ title, channel = "DEMO K VLOGS", views, time, verified, id }) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/160/90`} alt="" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel} {verified && "✅"}
        </div>
        <div className="views">
          {views} Views<span>.</span>
          {views} Views<span>.</span>
          {time}
        </div>
      </div>
    </>
  );
}
export default Video;

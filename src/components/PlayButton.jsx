import "./Playbutton.css";

function PlayButton({ message, children ,onSmash}) {
  const handleClick = () => {
   onSmash();
  };

  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}
export default PlayButton;

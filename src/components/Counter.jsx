import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
//   const [negNumber, setNegNumber] = useState(0);

  const handleClickAdd = (e) => {
    e.stopPropagation();
    setNumber(number + 1);
    console.log(number);
  };
  const handleClickMinus=(e)=>{
      e.stopPropagation();
      if(number>0){

       setNumber(number-1)
   }
  };
  return (
    <>
      <div>
        <h1 style={{ color: "white" }}>{number}</h1>
        <button onClick={handleClickAdd}>ADD</button>
        <button onClick={handleClickMinus}>MINUS</button>
      </div>
    </>
  );
}

export default Counter;

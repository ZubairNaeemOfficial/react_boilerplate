import React, { useMemo } from "react";
import useSquare from "../../hooks/useSquare";

const Banner = () => {
  const [number, setNumber] = React.useState(0);
  const [counter, setCounter] = React.useState(0);
  // with usememo >
   
   
 let functioncounter = () => {
    console.log("counter")
    return counter
  }
 
    const coutermemo = useMemo(() => functioncounter(), [counter]);
  
  const square =useSquare(number)
  return (
    <div>
      <>with out usememo</>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <p>{square}</p>
      <button onClick={() => setCounter(counter + 1)}>
      Re-render ({counter})
      </button>
      {coutermemo}
    </div>
  );
};

export default Banner;

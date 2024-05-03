import React, { useState } from "react";

const CompB = ({ setValue, value }) => {
  const [status, setStatus] = useState(true);
  const handleInc = () => {
    setStatus(false);
    setValue((intialval) => intialval + 1); // 0+1 = 1 // 1+1=2
  };
  const handleDec = () => {
    setStatus(true);
    if (value > 0) {
      setValue((intialval) => intialval - 1); // 0+1 = 1 // 1+1=2
    }
  };
  return (
    <div>
      <h1>Component using state</h1>
      <h2>The Value of a is :{value}</h2>
      {status ? (
        <button onClick={handleInc}>Click to increment</button>
      ) : (
        <button onClick={handleDec}>Click to decrement</button>
      )}
      {/* <button onClick={handleInc}>Click to increment</button>
            <button onClick={handleDec}>Click to decrement</button> */}
    </div>
  );
};

export default CompB;

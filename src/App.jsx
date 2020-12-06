import React from "react";
import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  function IncreaseCount() {
    setNum((prev) => {
      return prev + 1;
    });
  }
  function DecreaseCount() {
    setNum((prev) => {
      return prev !== 0 ? prev - 1 : 0;
    });
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{num}</h1>
          <div className="btn_div">
            <button onClick={IncreaseCount}>Increment</button>
            <button onClick={DecreaseCount}>Decrement</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

import React, { useState } from "react";
import AddImage from "./AddImage";
function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    console.log("Count Increased");
    setCount((prev) => {
      return prev + 1;
    });
    console.log(count);
  };
  return (
    <>
      <AddImage
        org={"IIT Jodhpur"}
        count={count}
        increaseCount={increaseCount}
      />
    </>
  );
}
export default App;

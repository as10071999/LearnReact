import React from "react";
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

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
            <button onClick={IncreaseCount}>
              <AddIcon />
            </button>
            <button onClick={DecreaseCount}>
              <DeleteOutlineIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

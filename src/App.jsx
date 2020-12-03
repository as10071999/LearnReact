import React from "react";
import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  const onSubmitFn = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  };

  function inputEvent(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    const value = event.target.value;
    const name = event.target.name;

    setFullName((preVal) => {
      console.log(preVal);
      if (name === "fname") {
        return {
          fname: value,
          lname: preVal.lname,
        };
      } else {
        return {
          fname: preVal.fname,
          lname: value,
        };
      }
    });
  }

  return (
    <>
      <div>
        <form onSubmit={onSubmitFn}>
          <h1>
            Hello {fullName.fname} {fullName.lname}
          </h1>
          <input
            type="text"
            placeholder="Enter Your First Name"
            name="fname"
            value={fullName.fname}
            onChange={inputEvent}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            name="lname"
            value={fullName.lname}
            onChange={inputEvent}
          />
          <br />
          <button type="submit">Click Me 👍</button>
        </form>
      </div>
    </>
  );
}
export default App;

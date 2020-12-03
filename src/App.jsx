import React from "react";
import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNo: "",
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
          email: preVal.email,
          phoneNo: preVal.phoneNo,
        };
      } else if (name === "lname") {
        return {
          fname: preVal.fname,
          lname: value,
          email: preVal.email,
          phoneNo: preVal.phoneNo,
        };
      } else if (name === "email") {
        return {
          fname: preVal.fname,
          lname: preVal.lname,
          email: value,
          phoneNo: preVal.phoneNo,
        };
      } else if (name === "phoneNo") {
        return {
          fname: preVal.fname,
          lname: preVal.lname,
          email: preVal.email,
          phoneNo: value,
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
          <h1>Your Email Id: {fullName.email}</h1>
          <input
            type="email"
            placeholder="Enter Your Email id"
            name="email"
            value={fullName.email}
            onChange={inputEvent}
            autoComplete="off"
          />
          <h1>Your PhoneNo: {fullName.phoneNo}</h1>
          <input
            type="number"
            placeholder="Enter Your phoneNo"
            name="phoneNo"
            value={fullName.phoneNo}
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

import React from "react";

function TodoList(props) {
  return (
    <>
      <div className="todo_style">
        <li>{props.text}</li>
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onselect(props.id);
          }}
        ></i>
      </div>
    </>
  );
}

export default TodoList;

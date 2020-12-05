import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [item, setItem] = useState("");
  const [listItem, setListItem] = useState([]);
  function itemEvent(event) {
    console.log(event.target.value);
    setItem(event.target.value);
  }
  function showList() {
    console.log(listItem);
    // setListItem([...listItem, item]);
    setListItem((prev) => {
      return [...prev, item];
    });
    setItem("");
  }

  function deleteItem(id) {
    console.log("Delete iTEM" + id);
    setListItem((prev) => {
      return listItem.filter((val, ind) => {
        if (ind !== id) {
          return true;
        } else {
          return false;
        }
      });
    });
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a item"
            value={item}
            onChange={itemEvent}
          />
          <button onClick={showList}>+</button>
          <ol>
            {listItem.map((val, index) => {
              return (
                <TodoList
                  key={index}
                  id={index}
                  text={val}
                  onselect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
export default App;

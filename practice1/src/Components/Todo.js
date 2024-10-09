import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddItem, DeleteItem } from "../redux/TodoSlice";

export default function Todo() {
  const [input, setInput] = useState("");
  const { items } = useSelector((state) => state.TodoList);
  const Dispatch = useDispatch();
  function handleInputTodo(event) {
    setInput(event.target.value);
  }
  function handleEnter() {
    Dispatch(AddItem({ input, id: Date.now() }));
    setInput("");
  }
  return (
    <div>
      <div>
        <input value={input} onChange={(e) => handleInputTodo(e)} />
        <button onClick={handleEnter}>Add</button>
      </div>
      <div>
        {items?.length > 0 &&
          items.map((item) => (
            <div>
              {item.input}{" "}
              <button onClick={()=>Dispatch(DeleteItem(item.id))}>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
}

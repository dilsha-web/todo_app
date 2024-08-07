import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  //handle input using onchange event

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  //handle add todo button using onclick event
  const handleAddTodo = () => {
    if (input !== "") {
      setTodo([...todo, input]);
      setInput("");
    }
  };

  //handle delete todo button using onclick event
  const handleDeleteTodo = (i) => {
    // filter method returns a new array by filtering the items which are not equal to the pass argument i. and the filtered array will be stored in newTodo
    const newTodo = todo.filter((item, index) => {
      return index !== i; // true if the index is not equal to the given index, false if the index is equal to the given index
    });
    //update the todo state with newTodo
    setTodo(newTodo);
  };

  //handle update todo button using onclick event
  const handleUpdateTodo = (i) => {
    // filter method filters the items which are equal to the pass argument i.
    // Prompt is used to get the new value from the user and store it in newInput
    // Finds the particular item in the todo array and updates it with newInput
    // Updates the todo state with the new todo array. No new items are added only the existing items are updated
    todo.filter((item, index) => {
      if (i === index) {
        const newInput = prompt("Enter Todo");
        todo[i] = newInput;
      }
    });
    setTodo([...todo]);
  };
  return (
    <div className="todo">
      <div className="todo-header">Todo App</div>
      <div className="todo-content">
        <input
          type="text"
          placeholder="Enter Todo"
          value={input}
          onChange={handleInput}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div className="todo-list">
        <ul>
          {todo.map((item, i) => (
            <div>
              <li key={i}>
                {item}{" "}
                <button
                  className="todo-delete"
                  onClick={() => handleDeleteTodo(i)}
                >
                  Delete
                </button>
                <button
                  className="todo-edit"
                  onClick={() => handleUpdateTodo(i)}
                >
                  Edit
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;

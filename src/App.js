// src > App.js
// The parent of the component
// It displays a list of tasks and a form

import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  // Create a state
  const [todos, setTodos] = useState([]); // state = todos, setState = setTodos

  // When the page is loaded, get todos from the local storage,
  // `localStorage`: save data in the browser
  // `JSON.parse`: convert string to an object
  // https://www.w3schools.com/react/react_useeffect.asp
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) setTodos(savedTodos);
  }, []); // []: when the first render

  // To save tasks in the local storage when the task is updated
  // (create, update, delete)
  useEffect(() => {
    console.log("todos changed", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>To-do App</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;

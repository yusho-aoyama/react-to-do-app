// src > App.js
// The parent of the component
// It displays a list of tasks and a form

import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
    <>
      <Header />
      <main className="py-4">
        <div className="container">
          <h2>Manage your daily tasks</h2>
          <p className="text-muted">
            Stay organised and keep track of what you need to do
          </p>

          <TodoForm setTodos={setTodos} />
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;

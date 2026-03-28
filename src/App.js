// src > App.js
// The parent of the component
// It displays a list of tasks and a form

import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  // Create a state (todo object)
  const [todos, setTodos] = useState([]); // state = todos, setState = setTodos

  // Add a state to filter tasks
  const [currentFilter, setCurrentFilter] = useState("all");

  // When the page is loaded, get todos from the local storage,
  // `localStorage`: save data in the browser
  // `JSON.parse`: convert string to an object
  // https://www.w3schools.com/react/react_useeffect.asp
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) setTodos(savedTodos);
  }, []); // []: when the first render

  // To save tasks in the local storage when the task is updated
  useEffect(() => {
    console.log("todos changed", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // A function to handle delete
  function handleDeleteTodo(id) {
    return setTodos(todos.filter((todo) => todo.id !== id));
  }

  // A function to handle toggle switch
  function handleToggleComplete(id) {
    setTodos((oldTodos) =>
      oldTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  // Difine a variable to filter todos by the currentFilter
  // it enables to filter which task will be displayed
  let filteredTodos;
  if (currentFilter === "active") {
    filteredTodos = todos.filter((todo) => {
      return todo.completed === false;
    });
  } else if (currentFilter === "completed") {
    filteredTodos = todos.filter((todo) => {
      return todo.completed === true;
    });
  } else {
    filteredTodos = todos;
  }

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
          <div className="d-flex gap-2 my-3">
            <button
              className={`btn ${currentFilter === "all" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setCurrentFilter("all")}
            >
              All
            </button>
            <button
              className={`btn ${currentFilter === "active" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setCurrentFilter("active")}
            >
              Active
            </button>
            <button
              className={`btn ${currentFilter === "completed" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setCurrentFilter("completed")}
            >
              Completed
            </button>
          </div>
          <TodoList
            allTodos={todos}
            filteredTodos={filteredTodos}
            currentFilter={currentFilter}
            onDelete={handleDeleteTodo}
            onToggle={handleToggleComplete}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;

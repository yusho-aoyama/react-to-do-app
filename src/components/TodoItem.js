// components > TodoItem

import React from "react";

function TodoItem(props) {
  // A function to delete a task
  function deleteTodo() {
    const newTodos = props.todos.filter((todo) => {
      return todo.id !== props.todo.id;
    });

    // Update by `setTodos`
    props.setTodos(newTodos);
  }

  // to use toggle button hen user complete a task
  function toggleComplete() {
    console.log("clicked todo:", props.todo);

    // Going through all taks one by
    const newTodos = props.todos.map((todo) =>
      todo.id === props.todo.id
        ? { ...todo, completed: !todo.completed }
        : todo,
    );

    console.log("updated todo:", newTodos);

    props.setTodos(newTodos);
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        onClick={toggleComplete}
        className={
          props.todo.completed ? "text-muted text-decoration-line-through" : ""
        }
        style={{ cursor: "pointer" }}
      >
        {props.todo.text}
      </span>

      <button onClick={deleteTodo} className="btn btn-outline-danger btn-sm">
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
}

export default TodoItem;

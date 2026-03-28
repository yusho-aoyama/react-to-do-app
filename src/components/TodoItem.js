// components > TodoItem

import React from "react";

function TodoItem(props) {
  // A function to delete a task
  function deleteTodo() {
    // Just pass the id to the parent (App.js)
    props.onDelete(props.todo.id);
  }

  // to use toggle button hen user complete a task
  function toggleComplete() {
    props.onToggle(props.todo.id);
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

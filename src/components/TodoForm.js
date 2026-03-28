// components > TodoForms
// Role: User input ->Todo Creation -> give it to `App.js`

import React, { useState } from "react";

function TodoForm(props) {
  const [text, setText] = useState("");

  function addTodo(event) {
    // Prevents the default browser action for the event.
    // The defailut browser is normlly automatically reloaded after form submission.
    event.preventDefault();

    const trimmedText = text.trim();

    if (!trimmedText) return;

    const newTodo = {
      id: Date.now(),
      text: trimmedText,
      completed: false,
    };

    console.log("new todo:", newTodo);

    // destructuring
    props.setTodos(function (oldTodos) {
      return [...oldTodos, newTodo];
    });
    // setTodos((oldTodos) => [...oldTodos, newTodo]);

    // Empty form input after adding
    setText("");
  }

  // Handle event if the text in the input field is changed
  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <form onSubmit={addTodo} className="d-flex my-2 gap-2">
      <div className="flex-grow-1">
        <input
          id="addTaskForm"
          className="form-control"
          placeholder="Enter a new task"
          type="text"
          value={text}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;

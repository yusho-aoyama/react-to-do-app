// components > TodoForms
// Role: User input ->Todo Creation -> give it to `App.js`

import React, { useState } from "react";

function TodoForm(props) {
  const [text, setText] = useState("");

  function addTodo(event) {
    // Prevents the default browser action for the event.
    // The defailut browser is normlly automatically reloaded after form submission.
    event.preventDefault();

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    console.log("new todo:", newTodo);

    // destructuring
    props.setTodos(function (oldTodos) {
      return [...oldTodos, newTodo];
    });

    // Empty form input after adding
    setText("");
  }

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button>Add Task</button>
    </form>
  );
}

export default TodoForm;

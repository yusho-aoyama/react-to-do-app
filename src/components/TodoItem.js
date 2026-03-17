// components > TodoItem

import React from "react";

function TodoItem(props) {
  // A function to delete a task
  function deleteTodo() {
    const newTodos = props.todos.filter((todo) => {
      return todo.id !== props.todo.id;
    });

    props.setTodos(newTodos);
  }

  // to use toggle button hen user complete a task
  function toggleComplete() {
    const newTodos = props.todos.map((todo) =>
      todo.id === props.todo.id
        ? { ...todo, completed: !todo.completed }
        : todo,
    );
    props.setTodos(newTodos);
  }

  return (
    <li>
      <span onClick={toggleComplete}>{props.todo.text}</span>

      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

export default TodoItem;

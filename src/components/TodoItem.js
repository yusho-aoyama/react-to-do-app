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
    <li>
      <span onClick={toggleComplete}>
        {props.todo.text} -{" "}
        {props.todo.completed ? "Completed" : "Not completed"}{" "}
      </span>

      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

export default TodoItem;

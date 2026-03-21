// components > TodoLists
// Role: display the list of tasks

import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={props.todos}
            setTodos={props.setTodos}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;

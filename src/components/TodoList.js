// components > TodoLists
// Role: display the list of tasks

import React from "react";
import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";

function TodoList(props) {
  return (
    <>
      {props.todos.length === 0 ? (
        <EmptyState />
      ) : (
        <ul className="list-group">
          {props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={props.onDelete}
              onToggle={props.onToggle}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;

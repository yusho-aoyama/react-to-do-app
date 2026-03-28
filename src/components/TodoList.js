// components > TodoLists
// Role: display the list of tasks

import React from "react";
import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";

function TodoList(props) {
  if (props.allTodos.length === 0) {
    return <EmptyState />;
  } else if (props.allTodos.length > 0 && props.filteredTodos.length === 0) {
    return (
      <>
        <div className="text-center py-4">
          <h5 className="text-muted">
            {props.currentFilter === "active" && "No active tasks"}
            {props.currentFilter === "completed" && "No completed tasks"}
          </h5>
          <p className="text-muted">
            Try changing the filter or add a new task.
          </p>
        </div>
      </>
    );
  } else {
    return (
      <ul className="list-group">
        {props.filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={props.onDelete}
            onToggle={props.onToggle}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;

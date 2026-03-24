// components > TodoLists
// Role: display the list of tasks

import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    // <div className="card" style="width: 18rem;">
    //   <div className="card-header">To-do</div>
    <ul className="list-group list-group-flush">
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
    // </div>
  );
}

export default TodoList;

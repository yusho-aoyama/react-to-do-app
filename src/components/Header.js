// src > components > Header.js
import React from "react";

function Header({ totalTasks }) {
  return (
    <header className="bg-light py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h4 className="mb-0">To-do App</h4>
        <span className="text-muted">Total tasks: {totalTasks}</span>
      </div>
    </header>
  );
}

export default Header;

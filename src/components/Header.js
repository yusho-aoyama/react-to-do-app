// src > components > Header.js
import React from "react";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-light bg-light p-3">
        <a class="navbar-brand">To-do App</a>
        <form className="d-flex">
          <input
            className="form-control me-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </header>
  );
}

export default Header;

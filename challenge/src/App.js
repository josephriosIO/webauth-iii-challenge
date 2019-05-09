import React from "react";
import "./App.css";
import { NavLink, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/login">Login</NavLink>
        {localStorage.getItem("jwt") ? (
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        ) : null}
      </nav>
    </div>
  );
}

export default App;

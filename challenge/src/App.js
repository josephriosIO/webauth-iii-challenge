import React from "react";
import "./App.css";
import { NavLink, Route, withRouter } from "react-router-dom";

import Login from "./components/auth/Login";
import Users from "./components/users/Users";
import Register from "./components/auth/Register";
import PrivateRoute from "./components/private/PrivateRoutes";

function App(props) {
  function logout() {
    localStorage.removeItem("jwt");
    props.history.push("/login");
  }
  return (
    <div className="App">
      <nav>
        <NavLink to="/login">Login</NavLink>
        &nbsp;|&nbsp;
        {localStorage.getItem("jwt") ? (
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        ) : null}
        {localStorage.getItem("jwt") ? (
          <button type="button" onClick={logout}>
            logout
          </button>
        ) : null}
      </nav>
      <main>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/users" component={Users} />
        <Route path="/Register" component={Register} />
      </main>
    </div>
  );
}

export default withRouter(App);

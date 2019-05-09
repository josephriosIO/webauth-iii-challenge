import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChanges = e => {
    const { value, id } = e.target;
    this.setState({
      [id]: value
    });
  };

  onSubmit = async e => {
    e.preventDefault();

    const endpoint = "http://localhost:4000/api/auth/login";
    try {
      const res = await axios.post(endpoint, this.state);
      localStorage.setItem("jwt", res.data.token);
      this.props.history.push("/users");
    } catch (err) {
      console.error(err);
    }
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <>
        <h1>login form</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="username">
              <input
                placeholder="enter username..."
                type="text"
                name="username"
                id="username"
                onChange={this.handleChanges}
                value={this.state.username}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <input
                placeholder="enter password..."
                type="password"
                name="password"
                id="password"
                onChange={this.handleChanges}
                value={this.state.password}
              />
            </label>
          </div>
          <div>
            <button type="submit">login</button>
          </div>
          <div>
            <NavLink to="/register">
              <button>register</button>
            </NavLink>
          </div>
        </form>
      </>
    );
  }
}

export default Login;

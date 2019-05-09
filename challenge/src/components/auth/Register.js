import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  state = {
    username: "",
    password: "",
    department: ""
  };

  handleChanges = e => {
    const { value, id } = e.target;
    this.setState({
      [id]: value
    });
  };

  onSubmit = async e => {
    e.preventDefault();

    const endpoint = "http://localhost:4000/api/auth/register";
    try {
      const res = await axios.post(endpoint, this.state);
      this.props.history.push("/login");
    } catch (err) {
      console.error(err);
    }
    this.setState({
      username: "",
      password: "",
      department: ""
    });
  };

  render() {
    return (
      <>
        <h1>register form</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="username">
              <input
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
                type="password"
                name="password"
                id="password"
                onChange={this.handleChanges}
                value={this.state.password}
              />
            </label>
          </div>
          <div>
            <label htmlFor="department">
              <input
                type="text"
                name="department"
                id="department"
                onChange={this.handleChanges}
                value={this.state.department}
              />
            </label>
          </div>
          <div>
            <button type="submit">register</button>
          </div>
        </form>
      </>
    );
  }
}

export default Register;

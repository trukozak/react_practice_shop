import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  loginOperation,
  registrOperation,
} from "../../redux/auth/authOperations";

class AuthForm extends Component {
  state = {
    email: "",
    password: "",
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    if (this.props.location.pathname === "/register") {
      this.props.registrOperation(this.state);
    }
    this.props.loginOperation(this.state);
  };
  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            value={password}
            onChange={this.onHandleChange}
          />
        </label>
        <button type="submit">
          {this.props.location.pathname === "/register" ? "singUp" : "singIn"}
        </button>
      </form>
    );
  }
}

export default connect(null, { registrOperation, loginOperation })(
  withRouter(AuthForm)
);

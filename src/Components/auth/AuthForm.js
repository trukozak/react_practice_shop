import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  loginOperation,
  registrOperation,
} from "../../redux/auth/authOperations";

const initialState = { email: "", password: "" };

const AuthForm = () => {
  const [state, setState] = useState(initialState);
  const location = useLocation();
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname === "/register") {
      dispatch(registrOperation(state));
    }
    dispatch(loginOperation(state));
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        Email
        <input
          type="text"
          name="email"
          value={state.email}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Password
        <input
          type="text"
          name="password"
          value={state.password}
          onChange={onHandleChange}
        />
      </label>
      <button type="submit">
        {location.pathname === "/register" ? "singUp" : "singIn"}
      </button>
    </form>
  );
};

export default AuthForm;

import { createReducer } from "@reduxjs/toolkit";
import { login, logOut, registration } from "./authActions";

export const authReducer = createReducer(
  {},
  {
    [registration]: (_, { payload }) => payload,
    [login]: (_, { payload }) => payload,
    [logOut]: () => ({}),
  }
);

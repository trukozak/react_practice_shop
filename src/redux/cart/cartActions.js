import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("cart/addToCart");
export const removeFromCart = createAction("cart/removeFromCart");
export const createOrder = createAction("cart/createOrder");
export const setError = createAction("cart/setError");
export const setLoader = createAction("cart/setLoader");
export const resetError = createAction("cart/resetError");

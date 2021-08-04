import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("cart/addToCart");
export const removeFromCart = createAction("cart/removeFromCart");
export const createOrder = createAction("cart/createOrder");
export const setError = createAction("cart/setError");
export const setLoader = createAction("cart/setLoader");
export const resetError = createAction("cart/resetError");


// const ADD_TO_CART = "addToCart";
// const REMOVE_FROM_CART_BY_ID = "removeFromCartByID";
// const CREATE_ORDER = "createOrder";
// const SET_LOADER = "setLoader";
// const SET_ERROR = "setError";
// const RESET_ERROR = "resetError";

// export {
//   ADD_TO_CART,
//   REMOVE_FROM_CART_BY_ID,
//   CREATE_ORDER,
//   SET_ERROR,
//   SET_LOADER,
//   RESET_ERROR,
// };


// export const addToCart = (product) => ({
//   type: ADD_TO_CART,
//   payload: product,
// });

// export const removeFromCart = (id) => ({
//   type: REMOVE_FROM_CART_BY_ID,
//   payload: id,
// });

// export const createOrder = () => ({
//   type: CREATE_ORDER,
// });

// export const setError = (message) => ({
//   type: SET_ERROR,
//   payload: message,
// });

// export const setLoader = () => ({
//   type: SET_LOADER,
// });

// export const resetError = () => ({
//   type: RESET_ERROR,
// });

const ADD_TO_CART = "addToCart";
const REMOVE_FROM_CART_BY_ID = "removeFromCartByID";
const CREATE_ORDER = "createOrder";
const SET_LOADER = "setLoader";
const SET_ERROR = "setError";
const RESET_ERROR = "resetError";

export {
  ADD_TO_CART,
  REMOVE_FROM_CART_BY_ID,
  CREATE_ORDER,
  SET_ERROR,
  SET_LOADER,
  RESET_ERROR,
};

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART_BY_ID,
  payload: id,
});

export const createOrder = () => ({
  type: CREATE_ORDER,
});

export const setError = (message) => ({
  type: SET_ERROR,
  payload: message,
});

export const setLoader = () => ({
  type: SET_LOADER,
});

export const resetError = () => ({
  type: RESET_ERROR,
});

import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addToCart,
  createOrder,
  removeFromCart,
  resetError,
  setError,
  setLoader,
} from "./cartActions";


const cartItemsReducer = createReducer([], {
  [addToCart]: (state, { payload }) => [...state, payload],
  [removeFromCart]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [createOrder]: () => [],
});

const cartLoaderReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const cartErrorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
});
//==================redux=============//
// import {
//   ADD_TO_CART,
//   CREATE_ORDER,
//   REMOVE_FROM_CART_BY_ID,
//   RESET_ERROR,
//   SET_ERROR,
//   SET_LOADER,
// } from "./cartActions";


// const cartItemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return [...state, action.payload];

//     case REMOVE_FROM_CART_BY_ID:
//       return state.filter((item) => item.id !== action.payload);

//     case CREATE_ORDER:
//       return [];

//     default:
//       return state;
//   }
// };

// const cartLoaderReducer = (state = false, { type }) => {
//   switch (type) {
//     case SET_LOADER:
//       return !state;
//     default:
//       return state;
//   }
// };

// const cartErrorReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case SET_ERROR:
//       return payload;

//     case RESET_ERROR:
//       return "";
//     default:
//       return state;
//   }
// };

const cartReducer = combineReducers({
  items: cartItemsReducer,
  isLoading: cartLoaderReducer,
  error: cartErrorReducer,
});

export default cartReducer;

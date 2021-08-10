import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authReducer";

import cartReducer from "./cart/cartReducer";
import productsReducer from "./products/productsReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  auth: authReducer,
});

export default rootReducer;

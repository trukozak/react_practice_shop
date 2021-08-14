import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cartReducer";
import productsReducer from "./products/productsReducer";

const persistConfig = {
  key: "auth",
  storage,
  whiteList: ["idToken"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  auth: persistReducer(persistConfig, authReducer),
});

export default rootReducer;

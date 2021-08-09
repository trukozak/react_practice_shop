import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getLaptops,
  getPhones,
  productsByCategory,
  resetError,
  setError,
  setFilter,
  setLoader,
} from "./productsAction";

const productsItemsReducer = createReducer(
  { phones: [], laptops: [] },
  {
    [addProduct]: (state, { payload }) => ({
      ...state,
      [payload.category]: [...state[payload.category], payload],
    }),
    [deleteProduct]: (state, { payload }) => ({
      ...state,
      [payload.category]: state[payload.category].filter(
        (item) => item.id !== payload.id
      ),
    }),
    [productsByCategory]: (state, { payload }) => {
      if (payload.length) {
        return { ...state, [payload[0].category]: payload };
      }
    },
    [getLaptops]: (state, { payload }) => ({
      ...state,
      laptops: payload,
    }),
    [getPhones]: (state, { payload }) => ({
      ...state,
      phones: payload,
    }),
    [getAllProducts]: (_, { payload }) => ({
      ...payload,
    }),
  }
);

const productsLoaderReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const productsErrorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
});

const productsFilterReducer = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
});

const productsReducer = combineReducers({
  items: productsItemsReducer,
  isLoading: productsLoaderReducer,
  error: productsErrorReducer,
  filter: productsFilterReducer,
});

export default productsReducer;

import { combineReducers } from "redux";
import { ADD_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, GET_LAPTOPS, GET_PHONES } from "./productsAction";

const productsItemsReducer = (
  state = { phones: [], laptops: [] },
  { type, payload }
) => {
  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        [payload.category]: [...state[payload.category], payload],
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        [payload.category]: state[payload.category].filter(
          (item) => item.id !== payload.id
        ),
      };
    case GET_LAPTOPS:
      return {
        ...state,
        laptops:payload
      };
    case GET_PHONES:
      return {
        ...state,
        phones:payload
      };
    case GET_ALL_PRODUCTS:
      return {
        ...payload,
      }

    default:
      return state;
  }
};

const productsLoaderReducer = (state = false) => {
  return state;
};

const productsErrorReducer = (state = "") => {
  return state;
};

const productsReducer = combineReducers({
  items: productsItemsReducer,
  isLoading: productsLoaderReducer,
  error: productsErrorReducer,
});

export default productsReducer;

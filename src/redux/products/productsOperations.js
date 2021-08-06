import { getAllAdvByCategory } from "../../services/Api";
import { productsByCategory, setError, setLoader } from "./productsAction";

export const getAllAdvByCategoryOperation = (category) => async (dispatch) => {
  dispatch(setLoader());
  try {
    const response = await getAllAdvByCategory(category);
    dispatch(productsByCategory(response));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoader());
  }
};

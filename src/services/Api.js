import axios from "axios";
const base_URL = "https://shopreact-296b9-default-rtdb.firebaseio.com/";

export const createNewAdv = async (product) => {
  try {
    const response = await axios.post(
      base_URL + `/adv/${product.category}.json`,
      product
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAdv = async (id, category) => {
  try {
    const response = await axios.delete(
      base_URL + `/adv/${category}/${id}.json`
    );
    return response;
  } catch (error) {
    console.log("🚀 ~ error", error);
  }
};
export const createNewOrder = async (order) => {
  try {
    const response = await axios.post(base_URL + `/orders.json`, order);
    return response;
  } catch (error) {
    console.log("🚀 ~ error", error);
  }
};

export const getAllAdvByCategory = async (category) => {
  try {
    const response = await axios.get(base_URL + `/adv/${category}.json`);
    return response.data
      ? Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
        }))
      : [];
  } catch (error) {
    console.log("🚀 ~ error", error);
  }
};

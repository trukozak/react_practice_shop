import {createAction} from "@reduxjs/toolkit";

export const addProduct = createAction("products/addProduct");
export const deleteProduct = createAction("products/deleteProduct");
export const getLaptops = createAction("products/getLaptops");
export const getPhones = createAction("products/getPhones");
export const getAllProducts = createAction("products/getAllProducts");
export const setError = createAction("products/setError");
export const resetError = createAction("products/resetError");
export const setLoader = createAction("products/setLoader");
export const productsByCategory = createAction("products/productsByCategory")
export const setFilter = createAction("products/setFilter");


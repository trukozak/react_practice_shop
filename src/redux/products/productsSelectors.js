import { createSelector } from "@reduxjs/toolkit";

export const productsFilterSelector = (state) => state.products.filter;

const productsSelector = (state, category) => state.products.items[category];

export const productsItemsSelector = createSelector(
  [productsSelector, productsFilterSelector],
  (products, filter) =>
    products.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    )
);

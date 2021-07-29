import ProductList from "../Components/productList/ProductList";

export const productsRoutes = [
  {
    name: "Phones",
    path: "/phones",
    component: ProductList,
    exact: true,
  },
  {
    name: "Laptops",
    path: "/laptops",
    component: ProductList,
    exact: true,
  },
];

import ProductList from "../Components/productList/ProductList";

export const productsRoutes = [
  {
    name: "Phones",
    path: "/phones",
    component: ProductList,
    category: "phones",
    exact: true,
  },
  {
    name: "Laptops",
    path: "/laptops",
    component: ProductList,
    category: "laptops",
    exact: true,
  },
];

import React from "react";
import ProductListItem from "./productListItem/ProductListItem";
import { ProductListStyled } from "./ProductListStyled";

const ProductList = ({ products }) => {
  return (
    <ProductListStyled>
      {products.map((product) => (
        <ProductListItem product={product} key={product.id} />
      ))}
    </ProductListStyled>
  );
};

export default ProductList;

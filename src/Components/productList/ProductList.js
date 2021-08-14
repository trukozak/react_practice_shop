import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setFilter } from "../../redux/products/productsAction";
import { getAllAdvByCategoryOperation } from "../../redux/products/productsOperations";
import { productsItemsSelector } from "../../redux/products/productsSelectors";
import Filter from "../filter/Filter";
import ProductListItem from "./productListItem/ProductListItem";
import { ProductListStyled } from "./ProductListStyled";

const ProductList = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const products = useSelector((state) =>
    productsItemsSelector(state, location.state.category)
  );

  useEffect(() => {
    dispatch(getAllAdvByCategoryOperation(location.state.category));
    dispatch(setFilter(""));
  }, [dispatch, location.state.category]);

  return (
    <>
      <Filter />
      <ProductListStyled>
        {products.map((product) => (
          <ProductListItem {...product} key={product.id} />
        ))}
      </ProductListStyled>
    </>
  );
};

export default ProductList;

import React from "react";
import colors from "../../../styles/colors";
import { ProductListItemStyled } from "./ProductListItemStyled";

const ProductListItem = ({ product }) => {
  const { name, image, description, isSale, price } = product;
  return (
    <ProductListItemStyled colors={colors}>
      <div className="productListItemWrapper">
        <h3 className="productListItemTitle">{name}</h3>
        <img
          className="productListItemImg"
          src={image}
          alt={name}
        />
        <p className="productListItemSale">
          Sale:{" "}
          {isSale ? "Действует акционная цена" : "В акции не участвует"}
        </p>
        <p className="productListItemDescription">{description}</p>
        <p className="productListItemPrice">
          Цена: <span>{price}</span>
        </p>
        <div className="productListItemButtonGroup">
          <button type="button" className="addToCartBtn">
            Add ro Cart
          </button>
          <button type="button" className="detailsBtn">
            Details
          </button>
        </div>
      </div>
    </ProductListItemStyled>
  );
};

export default ProductListItem;

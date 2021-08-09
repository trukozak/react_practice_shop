import React, { Component } from "react";
import { connect } from "react-redux";
import { setFilter } from "../../redux/products/productsAction";
import { getAllAdvByCategoryOperation } from "../../redux/products/productsOperations";
import { productsItemsSelector } from "../../redux/products/productsSelectors";
import Filter from "../filter/Filter";
import ProductListItem from "./productListItem/ProductListItem";
import { ProductListStyled } from "./ProductListStyled";

class ProductList extends Component {
  async componentDidMount() {
    await this.props.getAllAdvByCategoryOperation(this.props.category);
    this.props.setFilter("");
  }

  render() {
    return (
      <>
        <Filter />
        <ProductListStyled>
          {this.props.products.map((product) => (
            <ProductListItem
              product={product}
              key={product.id}
              addToCart={this.props.addToCart}
            />
          ))}
        </ProductListStyled>
      </>
    );
  }
}
const mapStateToProps = (state, props) => ({
  category: props.location.state.category,
  products: productsItemsSelector(state, props.location.state.category),
});

export default connect(mapStateToProps, {
  getAllAdvByCategoryOperation,
  setFilter,
})(ProductList);

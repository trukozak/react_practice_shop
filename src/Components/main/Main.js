import React, { Component } from "react";
import data from "../../data";
import ProductList from "../productList/ProductList";
import Section from "../section/Section";
import { MainStyled } from "./MainStyled";
import CartList from "../cartList/СartList";
import AdvForm from "../admin/AdvForm";

class Main extends Component {
  state = {
    cart: [],
    ...data,
  };

  addNewAdv = (product) => {
    this.setState((prev) => ({
      [product.category]: [...prev[product.category], product],
    }));
  };

  addToCart = (product) => {
    this.setState((prev) => ({
      cart: [...prev.cart, product],
    }));
  };

  removeFromCart = (id) => {
    this.setState((prev) => ({
      cart: prev.cart.filter((product) => product.id !== id),
    }));
  };

  removeAllFromCart = () => {
    this.setState({ cart: [] });
  };

  render() {
    return (
      <MainStyled>
        <Section title="Администрирование">
          <AdvForm addNewAdv={this.addNewAdv }/>
        </Section>
        <Section title={"Корзина"}>
          <CartList
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            removeAllFromCart={this.removeAllFromCart}
          />
        </Section>
        <Section title={"Мобильные телефоны"}>
          <ProductList
            products={this.state.phones}
            addToCart={this.addToCart}
          />
        </Section>
        <Section title={"Ноутбуки"}>
          <ProductList
            products={this.state.laptops}
            addToCart={this.addToCart}
          />
        </Section>
      </MainStyled>
    );
  }
}

export default Main;

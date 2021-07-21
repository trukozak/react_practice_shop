import React from "react";
import data from "../../data";
import ProductList from "../productList/ProductList";
import Section from "../section/Section";
import { MainStyled } from "./MainStyled";

const Main = () => {
  return (
    <MainStyled>
      <Section title={"Мобильные телефоны"}>
        <ProductList products={data.phones} />
      </Section>
      <Section title={"Ноутбуки"}>
        <ProductList products={data.laptops} />
      </Section>
    </MainStyled>
  );
};

export default Main;

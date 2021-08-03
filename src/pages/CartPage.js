import CartList from "../Components/cartList/СartList";
import Section from "../Components/section/Section";

const CartPage = () => {
  return (
    <Section title={"Корзина"}>
      <CartList />
    </Section>
  );
};

export default CartPage;

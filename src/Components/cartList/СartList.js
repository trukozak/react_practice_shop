import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/cart/cartActions";
import CartListItem from "./cartListItem/CartListItem";

const СartList = ({ cart, removeFromCart, removeAllFromCart }) => {
  return (
    <>
      {cart.length ? (
        <>
          <ul className="cartList">
            {cart.map((product) => (
              <CartListItem
                {...product}
                key={product.id}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>
          <button type="button" onClick={removeAllFromCart}>
            Оформить заказ
          </button>{" "}
        </>
      ) : (
        <p>Добавьте товар</p>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.items,
});
export default connect(mapStateToProps, { removeFromCart })(СartList);

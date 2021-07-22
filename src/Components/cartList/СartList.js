import React from "react";
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

export default СartList;

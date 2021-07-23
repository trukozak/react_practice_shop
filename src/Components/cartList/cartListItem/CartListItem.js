import React from "react";

const CartListItem = ({ name, price, id, removeFromCart }) => {
  const remove = () => {
    removeFromCart(id);
  };
  return (
    <li>
      <h3>{name}</h3>
      <p>{price}</p>
      <button type="button" onClick={remove}>
        x
      </button>
    </li>
  );
};

export default CartListItem;

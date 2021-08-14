import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/cart/cartActions";

const CartListItem = ({ name, price, id }) => {
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeFromCart(id));
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

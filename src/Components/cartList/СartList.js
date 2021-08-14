import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/cart/cartActions";
import { createOrderOperations } from "../../redux/cart/cartOperations";
import { cartItemsSelectors } from "../../redux/cart/cartSelectors";
import CartListItem from "./cartListItem/CartListItem";

const СartList = () => {
  const cart = useSelector(cartItemsSelectors);
  const dispatch = useDispatch();

  const removeAllFromCart = () => {
    dispatch(createOrderOperations(cart));
    dispatch(createOrder());
  };
  return (
    <>
      {cart.length ? (
        <>
          <ul className="cartList">
            {cart.map((product) => (
              <CartListItem {...product} key={product.id} />
            ))}
          </ul>
          <button type="button" onClick={removeAllFromCart}>
            Оформить заказ
          </button>
        </>
      ) : (
        <p>Добавьте товар</p>
      )}
    </>
  );
};

export default СartList;

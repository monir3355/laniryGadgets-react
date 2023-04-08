import React from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../utilitics/fakeDb";
import CartItem from "../Cards/CartItem";

const Cart = () => {
  let cart = [];
  const products = useLoaderData();
  const storedCart = getShoppingCart();
  // get local storage id and quantity then update quantity in products
  for (let id in storedCart) {
    const foundProduct = products.find((pd) => pd.id === id);
    if (foundProduct) {
      foundProduct.quantity = storedCart[id];
      cart.push(foundProduct);
    }
  }
  // console.log(cart);
  return (
    <div>
      {cart.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Cart;

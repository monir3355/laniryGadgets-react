import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  ClearFromDB,
  getShoppingCart,
  removeFromDB,
} from "../../utilitics/fakeDb";
import CartItem from "../Cards/CartItem";
import { CartContext } from "../../App";
import { toast } from "react-hot-toast";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  // console.log(cart);
  let total = 0;
  if (cart.length > 0) {
    for (let pd of cart) {
      total = total + pd.price * pd.quantity;
    }
  }
  // remove item from local Storage
  const handleRemoveItem = (id) => {
    const remaining = cart.filter((pd) => pd.id !== id);
    removeFromDB(id);
    setCart(remaining);
    toast.success("Removed Item 🔥");
  };
  // Clear all cart from local storage
  const handleClearFromDB = () => {
    if (cart.length > 0) {
      setCart([]);
      ClearFromDB();
      return toast.success("All Items Clear 👍");
    }
    return toast.error("Cart is Empty 🔥");
  };
  // place Order
  const handlePlaceOrder = () => {
    if (cart.length > 0) {
      setCart([]);
      removeFromDB();
      return toast.success("Order Placed 👍");
    }
    return toast.error("Cart is Empty 🔥");
  };
  // console.log(total);
  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="text-3xl font-semibold">
          {cart.length ? "Review Cart Items" : "Cart is Empty"}
        </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cart.map((product) => (
            <CartItem
              product={product}
              key={product.id}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
        </ul>
        {total > 0 ? (
          <div className="space-y-1 text-right">
            <p>
              Total amount: <span className="font-semibold">{total}$</span>
            </p>
            <p className="text-sm text-gray-400">
              Not including taxes and shipping costs
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="flex justify-end space-x-4">
          {cart.length > 0 ? (
            <button onClick={handleClearFromDB} className="btn-outlined">
              Clear Cart
            </button>
          ) : (
            <Link to="/shop">
              <button className="btn-outlined">Back to Shop</button>
            </Link>
          )}
          <button onClick={handlePlaceOrder} className="btn-primary">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

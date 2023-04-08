import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../utilitics/fakeDb";
import CartItem from "../Cards/CartItem";

const Cart = () => {
  const { newCart, products } = useLoaderData();
  // console.log(newCart);
  let total = 0;
  if (newCart.length > 0) {
    for (let pd of newCart) {
      total = total + pd.price * pd.quantity;
    }
  }
  // console.log(total);
  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="text-3xl font-semibold">
          {newCart.length ? "Review Cart Items" : "Cart is Empty"}
        </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {newCart.map((product) => (
            <CartItem product={product} key={product.id} />
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
      </div>
    </div>
  );
};

export default Cart;

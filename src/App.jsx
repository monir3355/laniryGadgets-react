import React, { createContext, useState } from "react";
import Header from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";
import Modal from "./components/Modal/Modal";

export const ProductsContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { newCart, products } = useLoaderData();
  const [cart, setCart] = useState(newCart);
  const cartAlert = sessionStorage.getItem("alert");
  if (cart.length > 0 && !cartAlert) {
    setIsOpen(true);
    sessionStorage.setItem("alert", true);
  }
  return (
    <ProductsContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <div className="min-h-[calc(100vh-157px)]">
          <Outlet />
        </div>
        <Footer />
        <Modal  isOpen={isOpen} setIsOpen={setIsOpen}/>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
};

export default App;

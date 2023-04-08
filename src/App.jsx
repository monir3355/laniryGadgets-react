import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-157px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;

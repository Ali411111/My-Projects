import React from "react";
import Header from "../Header/Header";
import Cart from "../Cart/Cart";
import Toast from "../Toast/Toast";
import ChargerProducts from "../ChargerProducts/ChargerProducts";
export default function Chargers() {
  return (
    <div>
      <Header />
      <div className="main">
        <Cart />
        <ChargerProducts/>
        <Toast />
      </div>
    </div>
  );
}

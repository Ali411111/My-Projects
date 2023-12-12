import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import ProductsContextProvider from "./Components/Context/ProductsContext";
import { useRoutes } from "react-router-dom";
import routes from "./Components/routes/routes";
import Footer from "./Components/Footer/Footer";
export default function App() {
  const router = useRoutes(routes);
  return (
    <ProductsContextProvider>
      <NavBar />
      {router}
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </ProductsContextProvider>
  );
}

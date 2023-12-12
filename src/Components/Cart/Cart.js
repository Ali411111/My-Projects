import React, { useContext, useEffect, useRef } from "react";
import "./Cart.css";
import { BsBag } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { ProductsContext } from "../Context/ProductsContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Products from "../Products/Products";

export default function Cart() {
  const ProductContext = useContext(ProductsContext);
  let minButton = useRef();

  const minusHandler = (products) => {
    products.remaining++;
    let UserCart = [...ProductContext.userCart];
    UserCart.map((bagProduct) => {
      if (bagProduct.title === products.title) {
        ProductContext.setCounterBag((preCounter) => preCounter - 1);
        bagProduct.count--;
        if (bagProduct.count === 0) {
         console.log(products.remaining); 
          let ourPro = UserCart.findIndex((pro) => {
            return pro.title === bagProduct.title;
          });
          UserCart.splice(ourPro, 1);
        }
      }
    });
    ProductContext.setUserCart(UserCart);
  };

  const plusHandler = (products) => {
    products.remaining--;
    let UserCart = [...ProductContext.userCart];
    UserCart.map((bagProduct) => {
      if (bagProduct.title === products.title) {
        ProductContext.setCounterBag((preCounter) => preCounter + 1);
        bagProduct.count++;
      }
    });
    ProductContext.setUserCart(UserCart);
  };

  return (
    <aside
      className={`${ProductContext.isShowCart ? "active" : ""} bag-sidebar`}
    >
      {/*add active class to show*/}
      <h3 className="bag-title">
        <span>
          <BsBag />
          سبد خرید
        </span>
        <span>
          <AiOutlineClose
            className="close-icon"
            onClick={() => {
              ProductContext.setIsShowCart(false);
            }}
          />
        </span>
      </h3>
      <div className="row bag-wrapper">
        {ProductContext.userCart.map((products) => (
          <div key={products.id} className="col-12 mt-5">
            <div className="card py-3 px-3">
              <div className="col-12 text-center">
                <img
                  src={products.img}
                  alt="Product Image"
                  className="cart-img-top w-75"
                />
              </div>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <p className="card-text">{products.title}</p>
                <p className="price">{products.price} تومان</p>
                <br />
                <a href="#" className="btn btn-danger w-100">
                  خرید
                </a>
                <p className="number">تعداد باقیمانده:{products.remaining}</p>

                <div className="counter">
                  <button
                    ref={minButton}
                    className="btn btn-danger"
                    onClick={() => minusHandler(products)}
                  >
                    {products.count === 1 ? (
                      <DeleteOutlineIcon className="removeIcon" />
                    ) : (
                      <RemoveIcon />
                    )}
                  </button>
                  <p className="number">{products.count}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => plusHandler(products)}
                  >
                    <AddIcon className="addIcon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

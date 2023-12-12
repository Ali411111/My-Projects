import React, { useContext, useEffect } from "react";
import "./MoreInformation.css";
import { ProductsContext } from "../Context/ProductsContext";
import { Container, Col, Row } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Toast from "../Toast/Toast";
export default function MoreInformation() {
  const ProductContext = useContext(ProductsContext);

  const AddtoBag = (product) => {
    ProductContext.setIsShowToast(true);
    

    setTimeout(() => {
      ProductContext.setIsShowToast(false);
    }, 3000);

    let isInUserCart = ProductContext.userCart.some((bagproducts) => {
      return bagproducts.title === product.title;
    });

    if (!isInUserCart) {
      let newProduct = {
        id: ProductContext.userCart.lenght + 1,
        img: product.img,
        title: product.title,
        price: product.price,
        count: product.count,
        remaining: product.remaining-1,
      };

      ProductContext.setUserCart((prevproduct) => [...prevproduct, newProduct]);
      ProductContext.setCounterBag((preCounter) => preCounter + 1);
    } else {
      let UserCart = [...ProductContext.userCart];
      UserCart.some((bagProduct) => {
        if (bagProduct.title === product.title) {
          ProductContext.setCounterBag((preCounter) => preCounter + 1);
          bagProduct.count++;
        }
      });
      ProductContext.setUserCart(UserCart);
    }
  };

  return (
    <>
      <Cart />
      <Toast />
      {ProductContext.ProductInformation.map((product) => (
        <Container>
          <Row className="row">
            <Col>
              <div className="col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5">
                <div className="card py-5 px-3">
                  <div className="col-12 text-center">
                    <img
                      src={product.img}
                      alt="Product Image"
                      className="card-img-top w-75"
                    />
                  </div>
                  <div className="card-body text-center">
                    <p className="card-text">{product.title}</p>
                    <p className="price">{product.price}تومان</p>
                    <br />
                    <a
                      href="javascript:void(0)"
                      className="btn btn-danger w-100 mt-1"
                      onClick={() => AddtoBag(product)}
                    >
                      افزودن به سبد
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="desc">{product.describtion}</Col>

            <Col>
              <img src={product.img} className="image-right" />
            </Col>
          </Row>
        </Container>
      ))}
    </>
  );
}

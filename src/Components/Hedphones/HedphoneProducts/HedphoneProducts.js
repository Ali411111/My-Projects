import React, { useContext, useEffect } from "react";
import './HedphoneProducts.css'
import { ProductsContext } from "../../Context/ProductsContext";
import { useNavigate } from "react-router-dom";
export default function HedphoneProducts() {
  const ProductContext = useContext(ProductsContext);
  let navigate = useNavigate();

  const MoreInformationHandler = (product) => {
    ProductContext.setProductInformation((prevProduct) => [
      ...prevProduct,
      product,
    ]);
    navigate("/more information", { replace: false });
  };

  const addToCart = (product) => {
    ProductContext.setIsShowToast(true);
    product.remaining--
    
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
      };

      ProductContext.setUserCart((prevproduct) => [...prevproduct, newProduct]);
      ProductContext.setCounterBag(preCounter=>preCounter+1)
  
    } else {
      let UserCart = [...ProductContext.userCart];
      UserCart.some((bagProduct) => {
        if (bagProduct.title === product.title) {
          ProductContext.setCounterBag(preCounter=>preCounter+1)
          bagProduct.count++
        }
      });
      ProductContext.setUserCart(UserCart);
    }
  };

  return (
    <>
      {ProductContext.hedphones.map((productSection) => (
        <div className="row justify-content-center mt-5">
          <h3 className="text-center title-txt">{productSection.title}</h3>
          {productSection.infos.map((product) => (
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5">
              <div className="card py-3 px-3">
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
                    className="btn btn-danger "
                    onClick={() => addToCart(product)}
                  >
                    افزودن به سبد
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="btn btn-outline-dark mt-1 information"
                    onClick={() => MoreInformationHandler(product)}
                  >
                    اطلاعات بیشتر
                  </a>
                  
                  <p className="number">تعداد باقیمانده:{product.remaining}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

import React, { useContext, useEffect, useRef } from "react";
import "./Products.css";
import { ProductsContext } from "../Context/ProductsContext";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function Products() {
  const ProductContext = useContext(ProductsContext);
  let navigate = useNavigate();
  const addBtn = useRef()
  const MoreInformationHandler = (product) => {
    ProductContext.setProductInformation([product]);
    navigate("/more information", { replace: false });
  };

  const AddToCart = (product) => {

    console.log(addBtn.current);
    ProductContext.setIsShowToast(true);
    // product.remaining--;
    setTimeout(() => {
      ProductContext.setIsShowToast(false);
    }, 3000);

    let isInUserCart = ProductContext.userCart.some((bagproducts) => {
      return bagproducts.title === product.title;
    });

    if (!isInUserCart) {
      let newProduct = {
        id: ProductContext.userCart.length + 1,
        img: product.img,
        title: product.title,
        price: product.price,
        count: product.count,
        remaining: product.remaining - 1,
      };

      ProductContext.setUserCart((prevproduct) => [...prevproduct, newProduct]);
      ProductContext.setCounterBag((preCounter) => preCounter + 1);
  
   } // } else {
    //   let UserCart = [...ProductContext.userCart];
    //   UserCart.some((bagProduct) => {
    //     if (bagProduct.title === product.title) {
    //       ProductContext.setCounterBag((preCounter) => preCounter + 1);
    //       bagProduct.count++;
    //     }
    //   });
    //   ProductContext.setUserCart(UserCart);
    // }
  };

  return (
    <>
      {ProductContext.allProducts.map((productSection) => (
        <div
          key={productSection.title}
          className="row justify-content-center mt-5"
        >
          <h3 className="text-center title-txt">{productSection.title}</h3>
          {productSection.infos.map((product) => (
            <div
              key={product.id}
              className="col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5"
            >
              <div className="card py-3 px-3 w-100">
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
                  <div className="buttons">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-outline-dark mt-1 information"
                      onClick={() => MoreInformationHandler(product)}
                    >
                      اطلاعات بیشتر
                    </a>
                    <a
                    
                      href="javascript:void(0)"
                      className="btn btn-danger "
                      onClick={() => AddToCart(product)}
                    >
                      افزودن به سبد
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

// {ProductContext.userCart.length > 0 ? (
//   ProductContext.userCart.map(
//     (pro) =>
//       pro.title === product.title && (
//         <p className="number">
//           تعداد باقیمانده:{pro.remaining}
//         </p>
//       )
//   )
// ) : (
//   <p className="number">
//     تعداد باقیمانده:{product.remaining}
//   </p>
// )}

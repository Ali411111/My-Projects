import React, { useContext } from "react";
import { ProductsContext } from '../Context/ProductsContext'
export default function Toast() {
 const ProductContext = useContext(ProductsContext)
  return (
    <div className="toast-container position-fixed bottom-0 me-4 end-0 mb-4">
      <div className={`toast ${ProductContext.isShowToast ? 'show' : ''} align-items-center text-white bg-primary`}>{/*add show class to show*/}
        <div className="d-flex justify-content-between align-items-center">
          <button
            type="button"
            className="btn-close btn-close-white ms-3"
            onClick={()=>{
                ProductContext.setIsShowToast(false)
            }}
          ></button>
          <div className="toast-body">محصول با موفقیت به سبد اضافه شد</div>
        </div>
      </div>
    </div>
  );
}

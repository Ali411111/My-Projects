import "./Main.css";
import Products from "../Products/Products";
import Toast from "../Toast/Toast";
import Cart from "../Cart/Cart";
function Main() {
  return (
    <div className="main">
      <h3 className="main-title">همه محصولات</h3>
      <Cart/>
      <Products className='products'/>
      <Toast/>
    </div>
  );
}

export default Main;

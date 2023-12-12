import React, { useContext, useRef, useState } from "react";
import "./NavBar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchIcon from "@mui/icons-material/Search";
import { HiOutlineLogin } from "react-icons/hi";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../Context/ProductsContext";
import { Link } from "react-router-dom";
export default function NavBar() {
  const ProductContext = useContext(ProductsContext);
  let navigate = useNavigate();
  let inputValue = useRef();
  const [value, setValue] = useState("");

  const ChangeHandler = (event) => {
    setValue(event.target.value);
    console.log(value);
    if ((value === "شارژر" || value === "شارژرها") && event.key === "Enter") {
      navigate("/chargers", { replace: true });
      inputValue.current.value = "";
    } else if (
      (value === "کابل" || value === "کابل ها") &&
      event.key === "Enter"
    ) {
      navigate("/kables", { replace: true });
      inputValue.current.value = "";
    } else if (
      (value === "هدفون" || value === "هدفون ها") &&
      event.key === "Enter"
    ) {
      navigate("/hedphones", { replace: true });
      inputValue.current.value = "";
    }
  };

  const searchHandler = () => {
    if (value === "شارژر" || value === "شارژرها") {
      navigate("/chargers", { replace: true });
      inputValue.current.value = "";
    } else if (value === "کابل" || value === "کابل ها") {
      navigate("/kables", { replace: true });
      inputValue.current.value = "";
    } else if (value === "هدفون" || value === "هدفون ها") {
      navigate("/hedphones", { replace: true });
      inputValue.current.value = "";
    }
  };

  return (
    <nav className="nav" dir="rtl">
      <div className="titles">
        <h1 className="header-title">
          <Link to="/" className="header-title-link">
            Apple Accessories
          </Link>
        </h1>

        <div className="box-search">
          <input
            type="search"
            className="search"
            placeholder="جستجوی محصول"
            ref={inputValue}
            onKeyUp={(event) => ChangeHandler(event)}
          />
          <button className="header-btn">
            <SearchIcon onClick={searchHandler} />
          </button>
        </div>

        <div className="login-basket">
          <button
            className="topbar-btn"
            onClick={() => {
              navigate("/sign in", { replace: true });
            }}
          >
            <div className="topbar-btn-items">
              <HiOutlineLogin className="topbar-btn-icon" />
              <span className="topbar-btn-text">ورود|عضویت</span>
            </div>
          </button>
          <div className="basket">
            <button
              className="shopbasket"
              onClick={() => {
                ProductContext.setIsShowCart(true);
              }}
            >
              <LocalGroceryStoreOutlinedIcon />
              <span className="numberofbuys">{ProductContext.counterBag}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

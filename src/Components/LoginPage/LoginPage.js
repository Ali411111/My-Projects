import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
export default function LoginPage() {
  return (
    <>
      <Cart />
      <div className="container">
        <form className="Form-login">
          <span className="title">ورود</span>
          <div className="form-input">
            <input type="tel" className="inp" placeholder="شماره تماس" />
          </div>
          <div className="form-btn">
            <button type="submit" className="Btn">
              تایید
            </button>
          </div>
          <span className="login-txt">
            حساب کاربری ندارید؟
            <Link to="/sign in" className="to-signin">
              ثبت نام
            </Link>
          </span>
        </form>
      </div>
    </>
  );
}

import React from "react";
import "./SignedPage.css";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
export default function SignedPage() {
  return (
    <>
      <Cart />
      <div className="login-form">
        <form className="form">
          <div className="form-container">
            <span className="form-title">ثبت نام</span>
            <div className="form-inputs">
              <div className="personal">
                <input
                  type="text"
                  className="personalinfo"
                  placeholder="نام و نام خانوادگی"
                />
              </div>
              <div className="user">
                <input
                  type="text"
                  className="username"
                  placeholder="نام کاربری"
                />
              </div>
              <div className="pass">
                <input
                  type="password"
                  className="password"
                  placeholder="پسورد"
                />
              </div>
              <div className="numb">
                <input type="tel" className="Number" placeholder="شماره تماس" />
              </div>
            </div>
            <button type="submit" className="login-btn">
              ثبت نام
            </button>
            <span className="text-login">
              قبلا ثبت نام کرده اید؟{" "}
              <Link to="/Login" className="to-login">
                وارد شوید
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

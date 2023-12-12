import React from "react";
import "./Footer.css";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { TfiDribbble } from "react-icons/tfi";
import { ImLinkedin2 } from "react-icons/im";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6 className="about-us">درباره ما</h6>
            <p className="text-justify about-text">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>

          <div className="col-xs-6 col-md-3 fast-links">
            <h6>لینک های سریع</h6>
            <ul className="footer-links">
              <li>
                <a href="#">درباره ما</a>
              </li>
              <li>
                <a href="#">تماس با ما</a>
              </li>
              <li>
                <a href="#">مشارکت</a>
              </li>
              <li>
                <a href="#">سیاست حفظ حریم خصوصی</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="copy-icons">
        <div className="copy-right">
          <p className="copyright-text">
            است Apple Accessories تمام حقوق این وبسایت متعلق به فروشگاه آنلاین
          </p>
        </div>

        <div className="icons">
          <ul className="social-icons">
            <li>
              <a className="facebook" href="#">
                <GrFacebookOption />
              </a>
            </li>
            <li>
              <a className="twitter" href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a className="dribbble" href="#">
                <TfiDribbble />
              </a>
            </li>
            <li>
              <a className="linkedin" href="#">
                <ImLinkedin2 />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import classes from "./header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
function Header() {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            {" "}
            <a href="">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
              />
            </a>
          </div>

          {/* delivery */}
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopa</span>
            </div>
          </div>

          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={25} />
          </div>
          {/* right side link */}
          <div className={classes.order_container}>
            <div>
              <a href="" className={classes.language}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRKEdduu36os2L-A9bJ3tB6xnTAso24KLmg&s"
                  alt=""
                />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </a>
            </div>
            {/* three components */}
            <a href="">
              <p>Hello, Sign In</p>
              <span>Account & Lists</span>
            </a>
            {/* orders */}
            <a href="">
              <p>Returns</p>
              <span>& orders</span>
            </a>
            {/*  cart */}
            <a to={"/cart"}></a>
            {/* icon */}
            <a href="" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
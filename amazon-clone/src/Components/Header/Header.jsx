import React, {useContext} from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import {DataContext} from "../DataProvider/DataProvider"
function Header() {

  const [{ basket },dispatch]=useContext(DataContext)
  const totalItem = basket?.reduce((amount, item) => {
   return item.amount+amount
},0)


  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
              />
            </Link>
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
              <Link to="/" className={classes.language}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRKEdduu36os2L-A9bJ3tB6xnTAso24KLmg&s"
                  alt=""
                />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </Link>
            </div>
            {/* three components */}
            <a href="/auth">
              <p>Hello, Sign In</p>
              <span>Account & Lists</span>
            </a>
            {/* orders */}
            <Link to="/orders">
              <p>Returns</p>
              <span>& orders</span>
            </Link>
            {/*  cart */}

            {/* icon */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;

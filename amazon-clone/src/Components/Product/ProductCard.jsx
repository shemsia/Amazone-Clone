import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat.jsx";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
function ProductCard({ product }) {
  const { image, title, id, rating, price } = product;
  const ratingValue = rating ? rating.rate : 0;
  const ratingCount = rating ? rating.count : 0;
  return (
    <div className={classes.card_container}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* Rating */}
          <Rating value={ratingValue} precision={0.1} />
          {/* rating counter */}
          <small>{ratingCount}</small>
        </div>
        <div>
          {/* Price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;

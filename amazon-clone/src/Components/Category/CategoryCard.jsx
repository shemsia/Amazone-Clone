import React from "react";
import classes from "./Category.module.css";
// import { Link } from "react-router-dom";
const CategoryCard = (props) => {
  return (
    <div className={classes.Category}>
      <a href={`/category/${props.data.category}`}>
        <span>
          <h2>{props.data?.title}</h2>
        </span>
        <img src={props.data?.imgLink} alt="" />
        <p>Shop Now</p>
      </a>
    </div>
  );
};

export default CategoryCard;



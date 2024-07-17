import React from "react";
import { categoryInfos } from "./CategoryFullInfos";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";
function Category() {
  return (
    <section className={classes.Category_container}>
      {categoryInfos.map((infos, index) => (
        <CategoryCard data={infos} key={index} />
      ))}
    </section>
  );
}

export default Category;

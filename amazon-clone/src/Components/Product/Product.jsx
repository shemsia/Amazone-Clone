import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";

const Product = () => {
  const [products, setProducts] = useState();
const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);

      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);

      });
  }, []);

  return (

    <>
      
      {
        isLoading ? (<Loader /> ): (
          <section className={classes.products_container}>
      {products &&
        products?.map((singleProduct) => (
          <ProductCard key={singleProduct.id} renderAdd={true} product={singleProduct} />
        ))}
    </section>
        )
      }

</>


    
  );
};

export default Product;

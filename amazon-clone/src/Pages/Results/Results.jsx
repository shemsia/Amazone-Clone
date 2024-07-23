import React, { useState, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import classes from "./Results.module.css";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";
function Results() {
  const { categoryName } = useParams();
  const [results, setResults] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <h2 style={{ padding: "30px" }}>Category / {categoryName}</h2>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  renderAdd={true}
                  product={product}
                  renderDesc={false}
                />
              );
            })}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;

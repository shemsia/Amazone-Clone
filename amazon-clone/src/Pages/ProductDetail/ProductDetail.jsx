import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LayOut from "../../Components/LayOut/LayOut";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";
function ProductDetail() {
  const { productId } = useParams();
  const [product, setproduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setproduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]);
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
            <ProductCard product={product}
              flex={true} 
              renderDesc={true}
              renderAdd={true}
            />
        </div>
      )}
    </LayOut>
  );
}

export default ProductDetail;

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductDetails from "./ProductDetails";
import repeatArray from "@/utils/repeatArray";

const ProductFetch = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`/api/products/id/${productId}`);
      const product = await response.json();
      product.images = repeatArray(product.images);
      setProduct(product);
    };
    fetchProduct();
  }, []);

  return (
    <>
      {product ? <ProductDetails product={product} /> : <div>Loading...</div>}
    </>
  );
};
export default ProductFetch;

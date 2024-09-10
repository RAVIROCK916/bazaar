"use client";

import { Button } from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import { setProducts } from "@/state/products/productsSlice";
import { RootState } from "@/state/store";
import ProductType from "@/types/ProductType";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DiscoverProductsSection = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/products");
      dispatch(setProducts(response.data.products));
      console.log(response.data.products);
    };
    fetchProducts();
  }, []);

  return (
    <section className="space-y-20 py-6 sm:py-28">
      <div className="sm:flex">
        <div className="flex-1 space-y-4">
          <p className="text-base font-semibold">Discover</p>
          <h2>Our Products</h2>
          <p>
            Explore our comprehensive catalog of products with filters and
            sorting options.
          </p>
        </div>
        <div className="mt-4 flex flex-1 sm:mt-0 sm:items-end sm:justify-end">
          <Button intent="outline">View All</Button>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product: ProductType) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
export default DiscoverProductsSection;

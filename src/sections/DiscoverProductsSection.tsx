"use client";

import { Button } from "@/components/Button";
import ProductCard, { ProductCardSkeleton } from "@/components/ProductCard";
import ProductType from "@/types/ProductType";
import axios from "axios";
import { useEffect, useState } from "react";

const DiscoverProductsSection = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data.products);
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
        {products.length > 0
          ? products.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))
          : new Array(8)
              .fill(0)
              .map((_, index) => <ProductCardSkeleton key={index} />)}
      </div>
    </section>
  );
};
export default DiscoverProductsSection;

import { Button } from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import ProductType from "@/types/ProductType";
import axios from "axios";
import { useEffect, useState } from "react";

const DiscoverProductsSection = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/products");
      console.log("response", response.data);
      setProducts(response.data);
    };
    fetchProducts();
  }, []);
  return (
    <section className="space-y-20 py-28">
      <div className="flex">
        <div className="flex-1 space-y-4">
          <p className="text-base font-semibold">Discover</p>
          <h2>Our Products</h2>
          <p>
            Explore our comprehensive catalog of products with filters and
            sorting options.
          </p>
        </div>
        <div className="flex flex-1 items-end justify-end">
          <Button intent="outline">View All</Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-12 gap-y-16">
        {products.map((product: ProductType) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
export default DiscoverProductsSection;

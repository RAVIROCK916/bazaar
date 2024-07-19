import ProductType from "@/types/ProductType";
import Image from "next/image";
import { Button } from "./Button";
import { IndianRupee } from "lucide-react";

type props = {
  product: ProductType;
};

const ProductCard = ({ product }: props) => {
  return (
    <div className="space-y-4">
      <figure>
        <Image
          src={product.image.src}
          alt={product.title}
          width={304}
          height={364}
        />
      </figure>
      <div>
        <div className="flex justify-between gap-4 text-base font-semibold">
          <p className="line-clamp-1">{product.title}</p>
          <span className="flex items-center">
            <IndianRupee className="h-4 w-4" />
            {parseInt(product.variants[0].price)}
          </span>
        </div>
        <p className="text-sm">{product.tags}</p>
      </div>
      <Button intent="outline" className="w-full">
        Add to Cart
      </Button>
    </div>
  );
};
export default ProductCard;

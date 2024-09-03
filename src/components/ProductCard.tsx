"use client";

import { useState } from "react";
import ProductType from "@/types/ProductType";
import Image from "next/image";
import { Button } from "./Button";
import { IndianRupee } from "lucide-react";
import { useRouter } from "next/navigation";
import addToCart from "@/utils/addToCart";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import LoginDialog from "./LoginDialog";

type props = {
  product: ProductType;
};

const ProductCard = ({ product }: props) => {
  const [quantity, setQuantity] = useState(0);
  const router = useRouter();

  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  return (
    <div className="flex flex-col justify-between gap-y-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
      <figure
        className="cursor-pointer"
        onClick={() => router.push(`/products/id/${product.id}`)}
      >
        <Image
          src={product.images[0]}
          alt={product.title}
          width={304}
          height={364}
          className="mx-auto h-60 w-auto"
        />
      </figure>
      <div className="space-y-4">
        <div>
          <p className="line-clamp-1 font-medium">{product.title}</p>
          <div className="flex justify-between gap-4 text-base">
            <span className="flex items-center font-medium">
              <IndianRupee className="h-4 w-4" />
              {product.price}
            </span>
            <p className="text-sm">{product.category}</p>
          </div>
        </div>
        <LoginDialog isLoggedIn={isLoggedIn}>
          <Button
            className="w-full"
            onClick={(e) => {
              addToCart(product.id, 1);
              e.stopPropagation();
            }}
          >
            Add to cart
          </Button>
        </LoginDialog>
      </div>
    </div>
  );
};
export default ProductCard;

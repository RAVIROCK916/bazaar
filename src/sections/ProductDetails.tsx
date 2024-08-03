import { Button } from "@/components/Button";
import { ProductInfo } from "@/data";
import ProductType from "@/types/ProductType";
import Image from "next/image";
import { useState } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

type props = {
  product: ProductType;
};

const ProductDetails = ({ product }: props) => {
  const rating = 4;
  const totalReviews = 15;
  const [tab, setTab] = useState(0);

  return (
    <section className="py-28">
      <div className="grid grid-cols-3 gap-4 first:row-start-1 first:row-end-3">
        {[...Array(5)].map((_, index) => (
          <figure>
            <img
              key={`${product.title}-${index}`}
              src={product.image.src}
              alt={product.title}
              // width={product.image.width}
              // height={product.image.height}
              className="border border-neutral-500"
            />
          </figure>
        ))}
      </div>
      <div className="flex">
        <div className="space-y-8">
          <h3>{product.title}</h3>
          <div className="space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              mauris nec est feugiat elementum.
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Sed ac mauris nec est feugiat elementum.</li>
              <li>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae.
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <div className="flex gap-x-6">
              {ProductInfo.map((item, idx) => (
                <span
                  key={item.title}
                  className={twMerge(
                    "cursor-pointer text-base",
                    tab === idx && "border-b-2 border-primary",
                  )}
                  onClick={() => setTab(idx)}
                >
                  {item.title}
                </span>
              ))}
            </div>
            <div>{ProductInfo[tab].description}</div>
          </div>
        </div>
        <div className="space-y-6">
          {/* <h4>{product.variants[0].price}</h4> */}
          <div className="flex gap-x-2">
            <div className="flex items-center gap-x-1">
              {[...Array(5)].map((_, index) => (
                <span key={`star-${index}`} className="text-xl text-primary">
                  {index < Math.floor(rating) ? <IoStar /> : <IoStarOutline />}
                </span>
              ))}
            </div>
            <p className="text-sm">
              ({rating} stars) • {totalReviews} reviews
            </p>
          </div>
          <div className="space-y-6">
            <VariantOptions />
            <div className="space-y-2">
              <p>Quantity</p>
              <input
                type="number"
                min="0"
                defaultValue="1"
                name="quantity"
                id="quantity"
                className="w-16 border border-primary p-2 outline-none"
              />
            </div>
            <div className="space-y-4">
              <Button className="w-full">Add to cart</Button>
              <Button intent="outline" className="w-full">
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VariantOptions = () => {
  const [selected, setSelected] = useState(0);
  const variants = ["Variant one", "Variant two", "Variant three"];
  return (
    <div className="space-y-2">
      <p>Variant</p>
      <div className="flex flex-wrap gap-4">
        {variants.map((item, idx) => (
          <Button
            key={item}
            intent={idx === selected ? "primary" : "outline"}
            onClick={() => setSelected(idx)}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;

import { Button } from "@/components/Button";
import { ProductInfo } from "@/data";
import ProductType from "@/types/ProductType";
import Image from "next/image";
import { useEffect, useState } from "react";

import { twMerge } from "tailwind-merge";
import { FaRegStar, FaStar } from "react-icons/fa6";
import addToCart from "@/utils/addToCart";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { IndianRupee } from "lucide-react";
import StarRating from "@/components/StarRating";
import LoginDialog from "@/components/LoginDialog";

type props = {
  product: ProductType;
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

const ProductDetails = ({ product }: props) => {
  const rating = 4;
  const totalReviews = 15;
  const [tab, setTab] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [currImage, setCurrImage] = useState(0);

  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  const images = product.images.map((img, index) => (
    <figure
      key={`image-${index}`}
      className="group flex aspect-square cursor-pointer flex-col place-content-center rounded border border-neutral-400 p-1.5 hover:bg-neutral-100 sm:p-4"
      style={currImage === index ? { border: "3px solid #666" } : {}}
      onClick={() => setCurrImage(index)}
    >
      <Image
        src={img}
        alt={product.title}
        height={200}
        width={200}
        className="w-full"
      />
    </figure>
  ));

  return (
    <section className="space-y-12 py-10 sm:py-28">
      <div className="items-end justify-between gap-x-6 sm:flex">
        <div className="grid max-w-xl grid-cols-6 gap-4">
          <figure className="col-span-5 row-span-5 rounded border border-neutral-400 p-4">
            <Image
              src={product.images[currImage]}
              alt={product.title}
              height={200}
              width={200}
              className="w-full"
            />
          </figure>
          {images}
        </div>
        <div className="mt-4 space-y-6 sm:mt-0">
          <h2 className="flex items-center">
            <IndianRupee className="size-10 font-semibold" />
            <span>{product.price} /-</span>
          </h2>
          <div className="flex gap-x-2">
            <div className="flex items-center gap-x-1">
              {[...Array(5)].map((_, index) => (
                <span key={`star-${index}`} className="text-xl text-primary">
                  {index < Math.floor(rating) ? <FaStar /> : <FaRegStar />}
                </span>
              ))}
            </div>
            <p className="text-sm">
              {/* ({rating} stars) • */}
              {totalReviews} reviews
            </p>
          </div>
          <div className="space-y-6">
            <VariantOptions />
            <div className="space-y-2">
              <p>Quantity</p>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                min="0"
                defaultValue="1"
                name="quantity"
                id="quantity"
                className="w-16 rounded border border-primary p-2 outline-none"
              />
            </div>
            <div className="space-y-4">
              <LoginDialog isLoggedIn={isLoggedIn}>
                <Button
                  className="w-full"
                  onClick={() => addToCart(product.id, quantity)}
                >
                  Add to cart
                </Button>
              </LoginDialog>
              <Button intent="outline" className="w-full">
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl space-y-8">
        <h3>{product.title}</h3>
        <div className="space-y-4">
          <p>{product.description}</p>
          <div className="list-inside list-disc space-x-2">
            {product.tags.map((tag, index) => (
              <span
                key={tag}
                className="rounded-full border border-primary px-2.5 py-0.5 text-xs font-semibold text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-4">
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
        <div className="space-y-4">
          <h4>Reviews</h4>
          <div className="flex flex-wrap gap-y-4 sm:gap-12">
            {product.reviews.map((review, index) => (
              <div
                key={index}
                className="space-y-2 rounded-lg bg-neutral-100 p-6"
              >
                <StarRating rating={review.rating} />
                <div>
                  <h6>{review.comment}</h6>
                  <p className="text-base">{review.reviewerName}</p>
                  <p className="text-sm">{review.reviewerEmail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

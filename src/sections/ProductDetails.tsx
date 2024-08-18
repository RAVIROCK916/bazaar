import { Button } from "@/components/Button";
import { ProductInfo } from "@/data";
import ProductType from "@/types/ProductType";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Zoom, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { twMerge } from "tailwind-merge";
import { FaRegStar, FaStar } from "react-icons/fa6";
import addToCart from "@/utils/addToCart";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { IndianRupee } from "lucide-react";

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

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  const images = [...Array(5)].map((_, index) => (
    <figure
      key={`image-${index}`}
      className="group flex h-full cursor-pointer place-content-center rounded border p-4 first:col-span-2 first:row-span-2 [&:nth-child(2)]:rotate-90 [&:nth-child(3)]:rotate-180 [&:nth-child(4)_img]:skew-x-3 [&:nth-child(5)]:grayscale"
      onClick={() => {
        setInitialSlide(index);
        setIsGalleryOpen(true);
      }}
    >
      <Image
        src={product.image}
        alt={product.name}
        height={200}
        width={200}
        className="w-full"
      />
    </figure>
  ));

  useEffect(() => {
    if (isGalleryOpen) {
      // Swiper initialization logic here if needed
    }

    return () => {
      if (thumbsSwiper && !thumbsSwiper.destroyed) {
        thumbsSwiper.destroy();
      }
    };
  }, [isGalleryOpen, thumbsSwiper]);

  return (
    <section className="space-y-12 py-28">
      <div className="grid grid-cols-4 gap-4">{images}</div>
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <button
            className="absolute right-4 top-4 text-2xl text-white"
            onClick={() => setIsGalleryOpen(false)}
          >
            ×
          </button>
          <Swiper
            style={
              {
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              } as React.CSSProperties
            }
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
            initialSlide={initialSlide}
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={`${product.name}-${index}`}
                className="border border-neutral-500 p-4 hover:brightness-95"
              >
                {image}
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={(swiper: SwiperType) => setThumbsSwiper(swiper)}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {images}
          </Swiper>
        </div>
      )}
      <div className="flex">
        <div className="space-y-8">
          <h3>{product.name}</h3>
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
          <h4 className="flex items-center">
            <IndianRupee />
            <span>{product.price}</span>
          </h4>
          <div className="flex gap-x-2">
            <div className="flex items-center gap-x-1">
              {[...Array(5)].map((_, index) => (
                <span key={`star-${index}`} className="text-xl text-primary">
                  {index < Math.floor(rating) ? <FaStar /> : <FaRegStar />}
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
              <Button
                className="w-full"
                onClick={() => addToCart(product.id, quantity, isLoggedIn)}
              >
                Add to cart
              </Button>
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

export default ProductDetails;

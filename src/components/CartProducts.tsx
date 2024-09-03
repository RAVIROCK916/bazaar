"use client";

import useDebounce from "@/hooks/useDebounce";
import useIsFirstRender from "@/hooks/useIsFirstRender";
import ProductType from "@/types/ProductType";
import axios from "axios";
import { IndianRupee, Minus, Plus } from "lucide-react";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

type CartItem = {
  product: ProductType;
  quantity: number;
};

interface CartItemCardProps {
  item: CartItem;
  removeCartItem: (idx: number) => void;
}

const CartItemCard = ({ item, removeCartItem }: CartItemCardProps) => {
  const [quantity, setQuantity] = useState(0);

  const debouncedQuantity = useDebounce(quantity);
  const isFirstRender = useIsFirstRender();

  const totalQuantity = item.quantity + quantity;

  useEffect(() => {
    if (isFirstRender) return;
    const updateCart = async () => {
      await axios.post(`/api/products/cart/add`, {
        productId: item.product.id,
        quantity: debouncedQuantity,
      });
    };

    updateCart();
  }, [debouncedQuantity]);

  return (
    <div
      key={item.product.id}
      className="relative flex w-[768px] gap-x-12 py-12"
    >
      <RxCross2
        className="absolute right-0 top-14 size-6 cursor-pointer text-neutral-400 hover:text-neutral-800"
        onClick={() => {
          removeCartItem(item.product.id);
        }}
      />
      <figure className="flex size-52 place-content-center rounded bg-neutral-100 p-2">
        <Image
          src={item.product.thumbnail}
          alt={item.product.title}
          width={180}
          height={180}
          className="w-full object-cover"
        />
      </figure>
      <div className="my-2 mr-12 flex flex-col justify-between uppercase">
        <div className="space-y-1">
          <Link href={`/products/id/${item.product.id}`}>
            <h2 className="line-clamp-1 hover:text-neutral-800">
              {item.product.title}
            </h2>
          </Link>
          <span className="flex items-center text-2xl text-neutral-600">
            <IndianRupee className="size-5" /> {item.product.price}
          </span>
        </div>
        <div className="flex items-center gap-x-10 font-semibold">
          <p>Quantity</p>
          <span className="flex gap-x-2">
            <button
              className="text-lg"
              onClick={() => {
                setQuantity((prev) => prev - 1);
              }}
              disabled={totalQuantity === 1}
            >
              <Minus
                className="size-5"
                style={
                  totalQuantity === 1
                    ? {
                        color: "gray",
                      }
                    : {}
                }
              />
            </button>
            <span className="flex size-8 items-center justify-center rounded bg-black px-2 text-white">
              {totalQuantity}
            </span>
            <button
              className="text-base"
              onClick={() => {
                setQuantity((prev) => prev + 1);
              }}
            >
              <Plus className="size-5" />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

const CartProducts = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const Router = useRouter();

  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch("/api/products/cart");
      const data = await res.json();
      setCartItems(data);
    };
    fetchCart();
  }, []);

  const removeCartItem = async (id: number) => {
    setCartItems((prevItems) => {
      const newCartItems = prevItems.filter((item) => item.product.id !== id);
      return newCartItems;
    });

    await axios.post("/api/products/cart/remove", {
      productId: id,
    });
    toast({
      title: "Cart",
      description: "Item removed from cart successfully",
      variant: "success",
    });
  };

  return cartItems?.length ? (
    <div className="relative flex justify-between gap-x-8">
      <div className="max-w-3xl divide-y-2 divide-neutral-800">
        {cartItems.map((item) => (
          <CartItemCard
            key={item.product.id}
            item={item}
            removeCartItem={removeCartItem}
          />
        ))}
      </div>
      <div className="sticky top-0 h-fit w-[420px] rounded bg-neutral-100 p-6">
        <div className="mb-4 space-y-3">
          {cartItems.map((item) => (
            <div
              key={item.product.id}
              className="flex justify-between font-medium"
            >
              <span className="max-w-72 uppercase">{item.product.title}</span>
              <span className="flex items-center">
                <IndianRupee className="size-3.5 text-neutral-700" />
                {item.product.price}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-between border-t border-neutral-400 py-4">
          <span>GST</span>
          <span>18%</span>
        </div>
        <div className="flex justify-between border-t border-t-neutral-400 pt-4 font-bold">
          <p className="tracking-wider">TOTAL</p>
          <span className="flex items-center text-lg">
            <IndianRupee className="size-3.5" />
            {cartItems
              .reduce((acc, item) => acc + Number(item.product.price), 0)
              .toFixed(2)}
          </span>
        </div>
        <div>
          <Button
            className="mt-4 w-full uppercase tracking-wider"
            onClick={() => Router.push("/profile/cart/checkout")}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <h4 className="my-4">No items in cart</h4>
  );
};
export default CartProducts;

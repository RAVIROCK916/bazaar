import { Metadata } from "next";
import CartProducts from "@/components/CartProducts";

export const metadata: Metadata = {
  title: "Cart",
  description: "Cart page",
};

const page = () => {
  return (
    <div className="min-h-screen pt-12">
      <h1 className="max-w-fit border-b-2 border-b-black text-6xl uppercase">
        Cart
      </h1>
      <CartProducts />
    </div>
  );
};
export default page;

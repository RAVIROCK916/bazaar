import InquirySection from "@/sections/InquirySection";
import PricingSection from "@/sections/PricingSection";
import { Metadata } from "next";
import ProductFetch from "@/sections/ProductFetch";

export const metadata: Metadata = {
  title: "Product Details",
  description: "Product Details",
};

const page = () => {
  return (
    <div>
      <ProductFetch />
      <PricingSection />
      <InquirySection />
    </div>
  );
};

export default page;

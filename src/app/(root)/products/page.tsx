import { Metadata } from "next";

import DiscoverProductsSection from "@/sections/DiscoverProductsSection";
import FAQSection from "@/sections/FAQSection";

export const metadata: Metadata = {
  title: "Products",
  description: "Discover a wide range of products at our online store.",
};

const page = () => {
  return (
    <div>
      <DiscoverProductsSection />
      <FAQSection />
    </div>
  );
};
export default page;

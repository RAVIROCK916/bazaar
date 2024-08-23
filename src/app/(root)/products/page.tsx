"use client";

import DiscoverProductsSection from "@/sections/DiscoverProductsSection";
import FAQSection from "@/sections/FAQSection";
import { useEffect } from "react";

const page = () => {
  return (
    <div>
      <DiscoverProductsSection />
      <FAQSection />
    </div>
  );
};
export default page;

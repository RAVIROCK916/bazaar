"use client";

import DiscoverSection from "@/sections/DiscoverSection";
import HeroSection from "@/sections/HeroSection";
import NewsLetterSection from "@/sections/NewsLetterSection";
import ShoppingExperienceSection from "@/sections/ShoppingExperienceSection";
import TestimonialsSection from "@/sections/TestimonialsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ShoppingExperienceSection />
      <DiscoverSection />
      <TestimonialsSection />
      <NewsLetterSection />
    </>
  );
};
export default Home;

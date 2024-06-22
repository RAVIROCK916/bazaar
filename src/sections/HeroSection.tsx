import { Button } from "@/components/Button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-between gap-36 py-20">
      <div className="flex w-[616px] flex-col gap-6">
        <h1>Welcome to our Bazaar!</h1>
        <p>
          Discover our wide new range of products and enjoy a seamless shopping
          experience. Shop now and get the best dealss!
        </p>
        <div className="flex gap-4">
          <Button>Shop Now</Button>
          <Button intent="outline">Learn More</Button>
        </div>
      </div>
      <figure>
        <Image
          src="/Hero.png"
          width={540}
          height={640}
          priority={true}
          alt="Hero Image"
        />
      </figure>
    </div>
  );
};
export default HeroSection;

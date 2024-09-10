import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="items-center justify-between gap-36 pb-10 pt-6 sm:flex sm:py-20">
      <div className="flex flex-col gap-5 sm:w-[616px] sm:gap-6">
        <h1>Welcome to our Bazaar!</h1>
        <p>
          Discover our wide new range of products and enjoy a seamless shopping
          experience. Shop now and get the best dealss!
        </p>
        <div className="flex gap-4">
          <Link href="/products">
            <Button>Shop Now</Button>
          </Link>
          <Link href="/about">
            <Button intent="outline">Learn More</Button>
          </Link>
        </div>
      </div>
      <figure className="hidden overflow-hidden rounded sm:block">
        <Image
          src="/Hero.png"
          width={540}
          height={640}
          priority={true}
          alt="Hero Image"
        />
      </figure>
    </section>
  );
};
export default HeroSection;

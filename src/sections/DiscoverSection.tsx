import { Button } from "@/components/Button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DiscoverSection = () => {
  return (
    <section className="flex items-center gap-20 py-20">
      <div className="flex flex-col gap-6">
        <strong>Discover</strong>
        <h2>Explore Our Latest Collection of Products</h2>
        <p>
          Browse through our curated selection of new arrivals and popular
          products. Find the perfect item for any occasion.
        </p>
        <ul className="flex list-inside list-disc flex-col gap-4 py-2">
          <li>
            <span></span>
            <span>Stylish and Functional Accessories for Everyday Use</span>
          </li>
          <li>
            <span></span>
            <span>Elevate Your Style with Our Trendy Fashion Pieces</span>
          </li>
          <li>
            <span></span>
            <span>Discover Unique and Handcrafted Home Decor Items</span>
          </li>
        </ul>
        <div className="mt-4 flex gap-6">
          <Link href="/products">
            <Button intent="outline">Shop</Button>
          </Link>
          <Link href="/about">
            <Button intent="ghost">
              Learn More <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
      <figure className="hidden overflow-hidden rounded sm:block">
        <Image
          src="/Latest Collection.png"
          width={616}
          height={640}
          priority={true}
          alt="Hero Image"
        />
      </figure>
    </section>
  );
};
export default DiscoverSection;

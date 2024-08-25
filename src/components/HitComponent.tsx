import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "@/utils/formatPrice";

import type { Hit } from "instantsearch.js";
import { Highlight } from "react-instantsearch";
import ProductType from "@/types/ProductType";

type HitComponentProps = {
  hit: Hit<ProductType>;
};

export function HitComponent({ hit }: HitComponentProps) {
  return (
    <Link href={`/products/id/${hit.id}`} className="group" key={hit.objectID}>
      <div className="sm:aspect-none aspect-square bg-white p-6 group-hover:opacity-75 sm:relative">
        <Image
          src={hit.images[0]}
          alt={hit.title}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
          width={512}
          height={512}
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="mt-4 line-clamp-3 text-sm text-gray-700">
          <Highlight
            hit={hit}
            attribute="title"
            classNames={{
              highlighted:
                "bg-indigo-50 rounded-sm px-0.5 text-indigo-600 font-semibold",
            }}
          />
        </h3>
        <p className="mt-2 text-sm text-gray-400">{hit.brand}</p>
        <p className="mt-2 text-sm font-medium text-gray-900">
          {formatPrice(hit.price, "INR")}
        </p>
      </div>
    </Link>
  );
}

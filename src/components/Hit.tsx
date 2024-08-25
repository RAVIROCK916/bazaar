import { Highlight } from "react-instantsearch";
import { getPropertyByPath } from "instantsearch.js/es/lib/utils";
import Link from "next/link";
import { IndianRupee } from "lucide-react";

type Props = {
  hit: any;
};

export const Hit = ({ hit }: Props) => {
  return (
    <Link
      href={`/products/id/${hit.id}`}
      key={hit.id}
      className="flex flex-1 items-center justify-between border-b border-b-neutral-100 p-4 hover:bg-neutral-50"
    >
      <div className="flex items-center gap-x-4">
        <img
          src={hit.image}
          alt={hit.name}
          height={50}
          width={50}
          className="h-12 w-12 rounded-md"
        />
        <div>
          <p className="text-sm font-medium">
            <Highlight attribute="name" hit={hit} />
          </p>
          <p className="flex items-center text-xs text-neutral-700">
            <IndianRupee className="w-3" />
            {hit.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

import { FiSearch } from "react-icons/fi";
import { Input } from "./Input";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IndianRupee } from "lucide-react";
import useDebounce from "@/hooks/useDebounce";

const SearchBar = () => {
  const Router = useRouter();

  const [search, setSearch] = useState("");
  const [isFocussed, setIsFocussed] = useState(false);
  const [productResults, setProductResults] = useState([]);

  const debouncedSearch = useDebounce(search);

  const fetchProducts = async () => {
    if (debouncedSearch.trim().length > 0) {
      const response = await fetch(`/api/products?search=${debouncedSearch}`);
      const data = await response.json();
      setProductResults(data);
    }
  };

  useEffect(() => {
    if (debouncedSearch.length > 0) {
      fetchProducts();
    } else {
      setProductResults([]);
    }
  }, [debouncedSearch]);

  return (
    <div className="relative">
      <FiSearch className="absolute left-4 top-1/2 w-4 -translate-y-1/2 text-primary" />
      <div className="max-w-96">
        <Input
          placeholder="Search"
          className="peer min-w-96 border-neutral-400 pl-10 focus:ring-0"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsFocussed(true)}
          onBlur={() => {
            setTimeout(() => setIsFocussed(false), 100);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              Router.push(`/products/search?q=${search}`);
              setIsFocussed(false);
            }
          }}
        />
        {productResults.length > 0 && isFocussed && (
          <div className="absolute top-[calc(100%-0.2rem)] z-10 w-full rounded-md border border-t-0 border-neutral-400 bg-white peer-focus:rounded-t-none peer-focus:border-t peer-focus:border-t-neutral-300">
            {productResults.slice(0, 5).map((product: any) => (
              <Link
                href={`/products/id/${product.id}`}
                key={product.id}
                className="flex items-center justify-between border-b border-b-neutral-100 px-4 py-2 hover:bg-neutral-50"
              >
                <div className="flex items-center gap-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    height={50}
                    width={50}
                    className="h-12 w-12 rounded-md"
                  />
                  <div>
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="flex items-center text-xs text-neutral-700">
                      <IndianRupee className="w-3" />
                      {product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchBar;

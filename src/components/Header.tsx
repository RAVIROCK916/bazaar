import Link from "next/link";
import { Button } from "./Button";
import Logo from "./Logo";
import { FaMagnifyingGlass, FaRegClock, FaUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { RootState } from "@/state/store";
import { profile_popup_items } from "@/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import SearchBar from "./SearchBar";
import { Search } from "./Search";
import { searchClient } from "@/utils/searchClient";
import { createQuerySuggestionsPlugin } from "@algolia/autocomplete-plugin-query-suggestions";
import { createLocalStorageRecentSearchesPlugin } from "@algolia/autocomplete-plugin-recent-searches";
import { Autocomplete } from "./AutoComplete";
import { useLazyRef } from "@/hooks/useLazyRef";
import { PRODUCTS_QUERY_SUGGESTIONS_INDEX_NAME } from "@/constants/algolia";
import { AutocompleteItem, AutocompleteItemAction } from "./AutoCompleteItem";
import { FiArrowUpRight } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import "@/styles/search.css";
import { HiOutlineClock, HiOutlineTrash } from "react-icons/hi";

const Header = () => {
  const Router = useRouter();
  const searchParams = useSearchParams();
  const auth = useSelector((state: RootState) => state.auth);

  const getRecentSearchesPlugin = useLazyRef(() =>
    createLocalStorageRecentSearchesPlugin({
      key: "RECENT_SEARCH",
      limit: 5,
      transformSource({ source, onTapAhead, onRemove }) {
        return {
          ...source,
          templates: {
            item({ item, components }) {
              return (
                <AutocompleteItem
                  router={Router}
                  href={`/products/search/?q=${item.label}`}
                  icon={FaRegClock}
                  actions={
                    <>
                      <AutocompleteItemAction
                        icon={HiOutlineTrash}
                        title="Remove this search"
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();

                          onRemove(item.label);
                        }}
                      />
                      <AutocompleteItemAction
                        icon={FiArrowUpRight}
                        title={`Fill query with "${item.label}"`}
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          onTapAhead(item);
                        }}
                      />
                    </>
                  }
                >
                  <components.ReverseHighlight hit={item} attribute="label" />
                </AutocompleteItem>
              );
            },
          },
        };
      },
    }),
  );

  const getQuerySuggestionsPlugin = useLazyRef(() =>
    createQuerySuggestionsPlugin({
      searchClient,
      indexName: PRODUCTS_QUERY_SUGGESTIONS_INDEX_NAME,
      transformSource({ source, onTapAhead }) {
        return {
          ...source,
          getItemUrl({ item }) {
            return `/products/search/?q=${item.query}`;
          },
          templates: {
            ...source.templates,
            item({ item, components }) {
              return (
                <AutocompleteItem
                  router={Router}
                  href={`/products/search/?q=${item.query}`}
                  icon={CiSearch}
                  actions={
                    <AutocompleteItemAction
                      icon={FiArrowUpRight}
                      title={`Fill query with "${item.query}"`}
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();

                        onTapAhead(item);
                      }}
                    />
                  }
                >
                  <components.ReverseHighlight hit={item} attribute="query" />
                </AutocompleteItem>
              );
            },
          },
        };
      },
    }),
  );

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-b-primary bg-white/70 px-32 py-4 backdrop-blur">
      <ul className="flex items-center gap-x-12">
        <li>
          <Link href="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link href="/products" className="uppercase">
            Shop now
          </Link>
        </li>
        <li>
          <Link href="/about" className="uppercase">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contact" className="uppercase">
            Contact
          </Link>
        </li>
        <li className="uppercase">More</li>
      </ul>
      <div className="flex items-center gap-4">
        <Autocomplete
          initialState={{
            query: (searchParams.get("q") as string) || "",
          }}
          openOnFocus={true}
          placeholder="Search for products"
          detachedMediaQuery="(max-width: 1024px)"
          classNames={{
            form: "relative rounded-md flex-1 border border-neutral-700",
            inputWrapperPrefix:
              "absolute inset-y-0 left-0 flex items-center pl-3",
            inputWrapperSuffix:
              "absolute inset-y-0 right-0 flex items-center pr-2",
            label: "flex items-center",
            submitButton: "h-5 w-5 text-gray-400",
            clearButton: "h-5 w-5 text-gray-400",
            input:
              "block w-full rounded-md outline-none border-neutral-300 py-2.5 pl-10 text-sm",
            panel:
              "flex-1 lg:flex-none lg:absolute z-10  lg:text-sm text-gray-500 bg-white lg:shadow-lg lg:rounded-b-md overflow-y-scroll lg:max-h-96",
            detachedSearchButton: "p-2 text-gray-400 hover:text-gray-500",
            detachedSearchButtonPlaceholder: "sr-only",
            detachedSearchButtonIcon:
              "w-6 h-6 flex items-center justify-center",
            detachedContainer:
              "fixed inset-0 flex flex-col divide-y divide-gray-200/50",
            detachedFormContainer: "flex p-2 bg-white",
            detachedCancelButton:
              "bg-white px-2 ml-2 text-gray-500 hover:text-gray-600 transition-colors",
          }}
          className="w-full min-w-96 max-w-4xl"
          navigator={{
            navigate({ itemUrl }) {
              Router.push(itemUrl);
            },
          }}
          onSubmit={({ state }) => {
            Router.push(`/products/search/?q=${state.query}`);
          }}
          plugins={[getRecentSearchesPlugin(), getQuerySuggestionsPlugin()]}
        />
        {auth.isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="flex size-8 items-center justify-center rounded-full bg-primary p-2.5 text-white outline-none hover:bg-primary/90">
              {/* <span className="rounded-full bg-primary p-2.5 outline-none"> */}
              {/* <Button > */}
              <FaUser />
              {/* </Button> */}
              {/* </span> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {profile_popup_items.map((item) => (
                <DropdownMenuItem
                  key={item.label}
                  className="cursor-pointer text-primary"
                  onClick={() => item.onClick(Router)}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Link href="/login">
              <Button intent="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
export default Header;

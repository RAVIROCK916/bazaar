import { searchClient } from "@/utils/searchClient";
import "instantsearch.css/themes/satellite.css";
import { InstantSearch } from "react-instantsearch";
import "@/styles/search.css";

import { Hit } from "./Hit";
import { Autocomplete } from "./AutoComplete";
import { PRODUCTS_INDEX_NAME } from "@/constants/algolia";
import { SearchBoxWithSuggestions } from "./SearchBoxWithSuggestions";

export const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName={PRODUCTS_INDEX_NAME}>
      {/* <Configure hitsPerPage={5} /> */}
      <div className="ais-InstantSearch relative">
        <Autocomplete
          openOnFocus={true}
          placeholder="Search for products"
          detachedMediaQuery="(max-width: 1024px)"
          classNames={{
            form: "relative rounded-md shadow-sm flex-1",
            inputWrapperPrefix:
              "absolute inset-y-0 left-0 flex items-center pl-3",
            inputWrapperSuffix:
              "absolute inset-y-0 right-0 flex items-center pr-2",
            label: "flex items-center",
            submitButton: "h-5 w-5 text-gray-400",
            clearButton: "h-5 w-5 text-gray-400",
            input:
              "block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
            panel:
              "flex-1 lg:flex-none lg:absolute lg:mt-2 lg:py-1 z-10 lg:ring-1 lg:ring-black lg:ring-opacity-5 lg:text-sm text-gray-500 bg-white lg:shadow-lg lg:rounded-md overflow-y-scroll lg:max-h-96",
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
          className="lg:w-4/6"
        />
        {/* <div className="absolute top-[calc(100%-0.2rem)] z-10 w-full rounded-md border border-t-0 border-neutral-400 bg-white peer-focus:rounded-t-none">
          <Hits hitComponent={Hit} className="search-results *:p-0" />
        </div> */}
      </div>
    </InstantSearch>
  );
};

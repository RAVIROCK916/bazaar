"use client";

import { HitComponent } from "@/components/HitComponent";
import { PRODUCTS_INDEX_NAME } from "@/constants/algolia";
import { searchClient } from "@/utils/searchClient";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import {
  Configure,
  ConfigureProps,
  InfiniteHits,
  InstantSearch,
  useSearchBox,
} from "react-instantsearch";
import { singleIndex } from "instantsearch.js/es/lib/stateMappings";

const page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const configureProps = {
    hitsPerPage: 12,
  } as ConfigureProps;

  return (
    <div>
      <InstantSearch
        searchClient={searchClient}
        indexName={PRODUCTS_INDEX_NAME}
        routing={{ stateMapping: singleIndex(PRODUCTS_INDEX_NAME) }}
        key={(searchParams.q as string) || ""}
      >
        <Configure {...configureProps} />
        <VirtualSearchBox />
        <div className="mx-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
          <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700">
                  Filters
                </span>
                <PlusIcon
                  className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
              </button>

              {/* <div className="hidden space-y-10 divide-y divide-gray-200 lg:block">
                <Filters type="list" />
              </div> */}
            </aside>

            <section
              aria-labelledby="product-heading"
              className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
            >
              <h2 id="product-heading" className="sr-only">
                Products
              </h2>

              <InfiniteHits
                hitComponent={HitComponent}
                showPrevious={true}
                classNames={{
                  list: "grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3",
                  item: "relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden",
                  loadPrevious:
                    "mb-10 h-10 w-full items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600",
                  disabledLoadPrevious: "hidden",
                  loadMore:
                    "mt-10 h-10 w-full items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600",
                  disabledLoadMore: "hidden",
                }}
              />
            </section>
          </div>
        </div>
      </InstantSearch>
    </div>
  );
};

function VirtualSearchBox() {
  useSearchBox();

  return null;
}

export default page;

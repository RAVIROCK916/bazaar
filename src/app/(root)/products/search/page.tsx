"use client";

import { HitComponent } from "@/components/HitComponent";
import { PRODUCTS_INDEX_NAME } from "@/constants/algolia";
import { searchClient } from "@/utils/searchClient";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import {
  Configure,
  InstantSearch,
  useSearchBox,
} from "react-instantsearch-core";
import {
  HierarchicalMenu,
  InfiniteHits,
  RangeInput,
  RefinementList,
} from "react-instantsearch";
import { ConfigureProps } from "react-instantsearch-hooks";
import { singleIndex } from "instantsearch.js/es/lib/stateMappings";
import { Filter, FilterProps } from "@/components/Filter";

const Page = ({
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
        {/* <VirtualSearchBox /> */}
        <div className="mx-w-2xl mx-auto lg:max-w-7xl">
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

              <div className="hidden space-y-10 divide-y divide-gray-200 lg:block">
                <Filters type="list" />
              </div>
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

function Filters({ type }: Pick<FilterProps, "type">) {
  return (
    <>
      <Filter header="Categories" type={type}>
        <HierarchicalMenu
          attributes={["categories.lvl0", "categories.lvl1"]}
          limit={8}
          classNames={{
            root: "pt-6 -ml-4",
            list: "ml-4 block space-y-4 lg:space-y-3",
            item: "space-y-4 lg:space-y-3",
            link: "block text-sm text-gray-600 cursor-pointer",
            count:
              "ml-1.5 rounded bg-gray-200 py-0.5 px-1.5 text-xs font-semibold tabular-nums text-gray-700",
          }}
        />
      </Filter>
      <Filter header="Brand" type={type} className="pt-10">
        <RefinementList
          attribute="brand"
          limit={8}
          classNames={{
            list: "pt-6 space-y-4 lg:space-y-3",
            item: "flex items-center",
            label: "cursor-pointer",
            selectedItem: "font-semibold",
            checkbox:
              "h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer",
            labelText: "ml-3 text-sm text-gray-600",
            count:
              "ml-1.5 rounded bg-gray-200 py-0.5 px-1.5 text-xs font-semibold tabular-nums text-gray-700",
          }}
        />
      </Filter>
      <Filter header="Price range" type={type} className="pt-10">
        <RangeInput
          attribute="price"
          classNames={{
            form: "pt-6 flex space-x-4 justify-between",
            input:
              "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
            separator: "self-center text-sm font-medium text-gray-500",
            submit:
              "rounded-md bg-gray-200 px-4 text-sm font-medium text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50",
          }}
        />
      </Filter>
    </>
  );
}

function VirtualSearchBox() {
  useSearchBox();

  return null;
}

export default Page;

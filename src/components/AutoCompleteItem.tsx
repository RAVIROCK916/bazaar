import React from "react";
import Link from "next/link";
import { createContext } from "react";

import { cx } from "../utils/cx";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type IconComponent = (props: React.ComponentProps<"svg">) => JSX.Element;

export const RouterContext = createContext<AppRouterInstance | null>(null);

export function AutocompleteItem({
  children,
  router,
  icon: Icon,
  actions,
  ...props
}: React.PropsWithChildren<
  React.ComponentProps<"a"> & {
    router: AppRouterInstance;
    icon: IconComponent;
    actions: JSX.Element;
  }
>) {
  return (
    <RouterContext.Provider value={router}>
      <Link
        href={props.href || "#"}
        {...props}
        className={cx(
          "flex items-stretch justify-between text-neutral-700 transition-colors hover:bg-gray-100 aria-selected:bg-gray-100",
          props.className,
        )}
      >
        <div className="flex items-center">
          <div className="flex items-center justify-center py-3 pl-5 pr-3 text-neutral-500 lg:py-2.5 lg:pl-3 lg:pr-2">
            <Icon className="h-5 w-5 stroke-1" />
          </div>
          <span>{children}</span>
        </div>
        <div className="mr-1.5 flex">{actions}</div>
      </Link>
    </RouterContext.Provider>
  );
}

type AutocompleteItemActionProps = {
  icon: IconComponent;
} & React.ComponentProps<"button">;

export function AutocompleteItemAction({
  children,
  icon: Icon,
  ...props
}: AutocompleteItemActionProps) {
  return (
    <button
      className="flex flex-none items-center justify-center p-1.5 text-gray-400/80 transition-colors hover:text-gray-600/80"
      {...props}
    >
      <Icon className="h-5 w-5 stroke-2 p-px" />
    </button>
  );
}

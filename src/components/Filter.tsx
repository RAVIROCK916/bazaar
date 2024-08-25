import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";

import { cx } from "../utils/cx";

export type FilterProps = React.ComponentProps<"div"> & {
  type: "list" | "disclosure";
  header: string;
};

type WrapperProps = Omit<FilterProps, "type">;

function ListWrapper({ header, children, ...divProps }: WrapperProps) {
  return (
    <div {...divProps}>
      <fieldset>
        <legend className="block text-sm font-medium text-gray-900">
          {header}
        </legend>
        {children}
      </fieldset>
    </div>
  );
}

function DisclosureWrapper({ header, children }: WrapperProps) {
  return (
    <Disclosure
      as="div"
      key="brand"
      className="border-t border-gray-200 pb-4 pt-4"
    >
      {({ open }: { open: boolean }) => (
        <fieldset>
          <legend className="w-full px-2">
            <DisclosureButton className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
              <span className="text-sm font-medium text-gray-900">
                {header}
              </span>
              <span className="ml-6 flex h-7 items-center">
                <ChevronDownIcon
                  className={cx(
                    open ? "-rotate-180" : "rotate-0",
                    "h-5 w-5 transform",
                  )}
                  aria-hidden="true"
                />
              </span>
            </DisclosureButton>
          </legend>
          <DisclosurePanel unmount={false} className="px-4">
            {children}
          </DisclosurePanel>
        </fieldset>
      )}
    </Disclosure>
  );
}

export function Filter({ type, header, children, ...divProps }: FilterProps) {
  const Wrapper = type === "list" ? ListWrapper : DisclosureWrapper;
  return (
    <Wrapper header={header} {...divProps}>
      {children}
    </Wrapper>
  );
}

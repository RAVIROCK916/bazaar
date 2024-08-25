import { useRefinementList } from "react-instantsearch-core";

import { cx } from "../utils/cx";
import { extractColorFacet } from "../utils/extractColorFacet";

import { CheckIcon } from "lucide-react";
import { RefinementListProps } from "react-instantsearch";

type ColorRefinementListProps = RefinementListProps & {
  classNames: Pick<RefinementListProps, "classNames"> &
    Partial<{
      swatch: string;
      swatchIcon: string;
    }>;
};

export function ColorRefinementList({
  searchable,
  searchablePlaceholder,
  attribute,
  operator,
  limit,
  showMore,
  showMoreLimit,
  sortBy,
  escapeFacetValues,
  transformItems,
  classNames = {},
  className,
  ...props
}: ColorRefinementListProps) {
  const { canRefine, items, refine } = useRefinementList({
    attribute,
    operator,
    limit,
    showMore,
    showMoreLimit,
    sortBy,
    escapeFacetValues,
    transformItems,
  });

  return (
    <div
      {...props}
      className={cx(
        "ais-ColorRefinementList",
        classNames.root,
        !canRefine &&
          cx(
            "ais-ColorRefinementList--noRefinement",
            classNames.noRefinementRoot,
          ),
        className,
      )}
    >
      <ul className={cx("ais-ColorRefinementList-list", classNames.list)}>
        {items.map((item: any) => {
          const { label, color } = extractColorFacet(item.label);

          return (
            <li
              key={item.value}
              className={cx(
                "ais-ColorRefinementList-item",
                classNames.item,
                item.isRefined &&
                  cx(
                    "ais-ColorRefinementList-item--selected",
                    classNames.selectedItem,
                  ),
              )}
            >
              <label
                className={cx(
                  "ais-ColorRefinementList-label",
                  classNames.label,
                )}
              >
                <input
                  checked={item.isRefined}
                  className={cx(
                    "ais-ColorRefinementList-checkbox",
                    classNames.checkbox,
                  )}
                  type="checkbox"
                  value={item.value}
                  onChange={() => refine(item.value)}
                />
                <div
                  style={{
                    background: color.startsWith("#") ? color : `url(${color})`,
                  }}
                  className={cx(
                    "ais-ColorRefinementList-swatch",
                    classNames.swatch,
                  )}
                >
                  {item.isRefined && (
                    <CheckIcon
                      className={cx(
                        "ais-ColorRefinementList-swatchIcon",
                        classNames.swatchIcon,
                      )}
                    />
                  )}
                </div>
                <span
                  className={cx(
                    "ais-ColorRefinementList-labelText",
                    classNames.labelText,
                  )}
                >
                  {label}
                </span>
                <span
                  className={cx(
                    "ais-ColorRefinementList-count",
                    classNames.count,
                  )}
                >
                  {item.count}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

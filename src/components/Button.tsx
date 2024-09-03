import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const button = cva(
  [
    "button",
    "flex",
    "gap-2",
    "justify-center",
    "items-center",
    "font-semibold",
    "cursor-pointer",
    "transition-colors",
    "rounded",
    "min-w-max",
    "disabled:cursor-not-allowed",
    "disabled:opacity-85",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-primary", "text-white", "enabled:hover:bg-primary-100"],
        outline: [
          "bg-transparent",
          "text-primary",
          "border",
          "border-primary",
          "enabled:hover:bg-neutral-100",
        ],
        ghost: ["text-primary", "enabled:hover:text-primary-200"],
      },
      size: {
        sm: ["px-5", "py-2"],
        md: ["px-6", "py-3"],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button = ({
  intent,
  size,
  className,
  children,
  ...props
}: ButtonProps) => (
  <button className={twMerge(button({ intent, size, className }))} {...props}>
    {children}
  </button>
);

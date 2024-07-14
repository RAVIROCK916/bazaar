import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  [
    "button",
    "flex",
    "gap-2",
    "justify-center",
    "items-center",
    "cursor-pointer",
    "transition-colors",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-primary", "text-white", "hover:bg-primary-100"],
        outline: [
          "bg-transparent",
          "text-primary",
          "border",
          "border-primary",
          "hover:bg-neutral-100",
        ],
        ghost: ["text-primary", "hover:text-primary-200"],
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

export const Button = ({ intent, size, children }: ButtonProps) => (
  <button className={button({ intent, size })}>{children}</button>
);

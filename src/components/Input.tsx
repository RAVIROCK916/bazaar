import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const input = cva(
  [
    "flex",
    "w-full",
    "font-medium",
    "bg-transparent",
    "px-4",
    "py-3",
    "rounded",
    "tracking-wide",
    "text-base",
    "outline-none",
    "focus:ring-primary",
    "focus:ring-1",
    "border",
    "border-neutral-600",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        outline: [""],
        filled: ["bg-gray-100", "text-gray-900"],
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof input> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size, variant, className, ...props }: InputProps, ref) => (
    <input
      className={twMerge(input({ variant, className }))}
      ref={ref}
      {...props}
    />
  ),
);

Input.displayName = "Input";

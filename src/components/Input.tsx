import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const input = cva(
  [
    "flex",
    "w-full",
    "bg-transparent",
    "px-3",
    "py-3",
    "text-sm",
    "outline-none",
    "focus:ring-primary-200",
    "focus:ring-offset-primary-100",
    "focus:border-primary-200",
    "border",
    "border-gray-500",
    "hover:border-gray-400",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        outline: ["border-gray-300", "hover:border-gray-400"],
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

export const Input = ({ size, variant, ...props }: InputProps) => {
  return <input className={input({ variant })} {...props} />;
};

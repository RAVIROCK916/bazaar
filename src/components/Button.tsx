import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-primary",
        "text-white",
        "px-5",
        "py-2",
        "hover:bg-primary-100",
      ],
      outline: [
        "bg-transparent",
        "text-primary",
        "px-5",
        "py-2",
        "border",
        "border-primary",
        "hover:bg-primary-900",
      ],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button = ({ intent, ...props }: ButtonProps) => (
  <button className={button({ intent })} {...props} />
);

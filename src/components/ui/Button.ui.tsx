import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> & {};

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "inline-block py-4 px-4 bg-accent text-white border-none rounded-4xl cursor-pointer transition-all uppercase " +
          "hover:bg-secondary  hover:shadow-md hover:text-(--accent)",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type FormProps = PropsWithChildren &
  React.FormHTMLAttributes<HTMLFormElement> & {};

export const Form = ({ children, className, ...props }: FormProps) => {
  return (
    <form
      className={twMerge(
        "p-10 bg-white rounded-xl shadow-lg grid gap-6 md:p-6",
        className
      )}
      {...props}
    >
      {children}
    </form>
  );
};

import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  loading?: boolean;
};

export const Button = ({
  children,
  className,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <button
      data-loading={loading}
      className={twMerge(
        "inline-block py-4 px-4 bg-accent text-white border-none rounded-4xl cursor-pointer transition-all uppercase " +
          "hover:bg-secondary  hover:shadow-md hover:text-(--accent)",
        "disabled:bg-(--secondary) disabled:text-(--primary) disabled:cursor-not-allowed disabled:shadow-none disabled:hover:bg-(--secondary) disabled:hover:text-(--primary) disabled:hover:shadow-none",
        "data-loading=true:cursor-wait data-loading=true:opacity-50 data-loading=true:pointer-events-none",
        className
      )}
      {...props}
    >
      {loading ? (
        <div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

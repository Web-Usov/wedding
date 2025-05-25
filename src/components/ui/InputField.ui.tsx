import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type InputFieldProps = PropsWithChildren & {
  id: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  wrapperClassName?: string;
  placeholder?: string;
  [key: `data-${string}`]: string | boolean | undefined;
};

export const InputField = ({
  children,
  id,
  name,
  type = "text",
  required = false,
  value,
  onChange,
  placeholder,
  className,
  wrapperClassName,
  ...rest
}: InputFieldProps) => {
  return (
    <div
      className={twMerge("grid gap-2", wrapperClassName)}
      {...Object.fromEntries(
        Object.entries({
          ...rest,
        }).filter(([key]) => key.startsWith("data-"))
      )}
    >
      {children && (
        <label htmlFor={id} className="font-heading text-accent text-base">
          {children}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={twMerge(
          "p-4 border-2 border-secondary rounded-lg font-body text-base transition-all focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 bg-pink-50/5 w-full",
          className
        )}
      />
    </div>
  );
};

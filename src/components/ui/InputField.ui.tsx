import React, { PropsWithChildren } from "react";
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
  error?: string;
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
  error,
  ...rest
}: InputFieldProps) => {
  return (
    <div
      className={twMerge("grid gap-2 relative", wrapperClassName)}
      {...Object.fromEntries(
        Object.entries({
          ...rest,
        }).filter(([key]) => key.startsWith("data-"))
      )}
    >
      <Label htmlFor={id}>{children}</Label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={twMerge(
          "p-4 border-2 border-(--secondary) rounded-lg font-body text-base transition-all focus:outline-none focus:border-(--accent) focus:ring-2 focus:ring-(--accent)/20 bg-pink-50/5 w-full",
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
            : "",
          className
        )}
      />
      <ErrorLabel htmlFor={id}>{error}</ErrorLabel>
    </div>
  );
};

export function ErrorLabel({
  children,
  ...props
}: PropsWithChildren<React.LabelHTMLAttributes<HTMLLabelElement>>) {
  return (
    <label
      className="font-heading text-accent text-sm text-red-500 absolute top-full"
      {...props}
    >
      {children}
    </label>
  );
}

export function ErrorMessage({
  children,
  className,

  ...props
}: PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>>) {
  return (
    <span
      className={twMerge("text-red-500 text-sm font-heading", className)}
      {...props}
    >
      {children}
    </span>
  );
}

export function Label({
  children,
  className,
  ...props
}: PropsWithChildren<React.LabelHTMLAttributes<HTMLLabelElement>>) {
  return (
    <label
      className={twMerge("font-heading text-(--accent) text-base", className)}
      {...props}
    >
      {children}
    </label>
  );
}

import { PropsWithChildren } from "react";
import PhoneInputBase from "react-phone-number-input/input-max";
import { twMerge } from "tailwind-merge";
import { ErrorLabel, Label } from "./InputField.ui";
// import "react-phone-number-input/style.css";

type InputFieldProps = PropsWithChildren & {
  id: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChangeValue: (value: string | undefined) => void;
  className?: string;
  wrapperClassName?: string;
  placeholder?: string;
  error?: string;
  [key: `data-${string}`]: string | boolean | undefined;
};

export const PhoneInput = ({
  children,
  id,
  name,
  type = "text",
  required = false,
  value,
  onChangeValue,
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
      <PhoneInputBase
        international={true}
        country="RU"
        withCountryCallingCode
        id={id}
        name={name}
        required={required}
        value={value.substring(0, 12)}
        onChange={(value: string | undefined) => {
          const formatted = (value ?? "").substring(0, 12);
          onChangeValue(formatted);
        }}
        placeholder={placeholder}
        className={twMerge(
          "p-4 border-2 border-(--secondary) rounded-lg font-body text-base transition-all focus:outline-none focus:border-(--accent) focus:ring-2 focus:ring-(--accent)/20 bg-pink-50/5 w-full",
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
            : "",
          className
        )}
        maxLength={16}
      />
      <ErrorLabel htmlFor={id}>{error}</ErrorLabel>
    </div>
  );
};

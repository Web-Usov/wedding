import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { ErrorLabel, Label } from "./InputField.ui";

type MultiSelectProps = PropsWithChildren & {
  id: string;
  name: string;
  options: string[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  className?: string;
  wrapperClassName?: string;
  error?: string;
};

export const MultiSelect = ({
  children,
  id,
  options,
  selectedValues,
  onChange,
  className,
  wrapperClassName,
  error,
}: MultiSelectProps) => {
  const toggleOption = (option: string) => {
    const newValues = selectedValues.includes(option)
      ? selectedValues.filter((v) => v !== option)
      : [...selectedValues, option];
    onChange(newValues);
  };

  return (
    <div className={twMerge("grid gap-2 relative", wrapperClassName)}>
      <Label htmlFor={id}>{children}</Label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            data-selected={selectedValues.includes(option)}
            key={option}
            type="button"
            onClick={() => toggleOption(option)}
            className={twMerge(
              "px-4 py-2 rounded-full border-2 transition-all cursor-pointer ",
              "data-[selected=true]:bg-(--accent) data-[selected=true]:text-white data-[selected=true]:border-(--accent) data-[selected=true]:hover:bg-(--accent)/80",
              "data-[selected=false]:bg-white data-[selected=false]:text-secondary data-[selected=false]:border-(--secondary) data-[selected=false]:hover:bg-(--secondary)",
              className
            )}
          >
            {option}
          </button>
        ))}
      </div>
      <ErrorLabel htmlFor={id}>{error}</ErrorLabel>
    </div>
  );
};

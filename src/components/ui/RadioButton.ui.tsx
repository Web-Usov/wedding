import { twMerge } from "tailwind-merge";
import { ErrorLabel, Label } from "./InputField.ui";

type RadioButtonProps<T extends string[] | number[], K extends T[number]> = {
  items: T;
  selectedValue: K;
  onChange: (value: K) => void;
  className?: string;
  wrapperClassName?: string;
  error?: string;
  children?: React.ReactNode;
  id: string;
};

export const RadioButton = <
  T extends string[] | number[],
  K extends T[number] = T[number]
>({
  id,
  items,
  selectedValue,
  onChange,
  className,
  wrapperClassName,
  error,
  children,
}: RadioButtonProps<T, K>) => {
  return (
    <div className={twMerge("grid gap-2 relative", wrapperClassName)}>
      <Label htmlFor={id}>{children}</Label>
      <div
        className={twMerge(
          "flex gap-0 items-stretch justify-between rounded-4xl ",
          className
        )}
      >
        {items.map((item) => (
          <button
            data-selected={selectedValue === item}
            type="button"
            className={twMerge(
              " w-full bg-(--primary) outline-(--accent) border-(--accent) p-4 text-center transition-all overflow-visible relative ",
              "first:rounded-l-md last:rounded-r-md",
              "hover:data-[selected=false]:bg-(--secondary) hover:data-[selected=false]:cursor-pointer ",
              "data-[selected=true]:outline-2 data-[selected=true]:z-10"
            )}
            key={item}
            onClick={() => onChange(item as K)}
            disabled={selectedValue === item}
          >
            {item}
          </button>
        ))}
      </div>
      <ErrorLabel>{error}</ErrorLabel>
    </div>
  );
};

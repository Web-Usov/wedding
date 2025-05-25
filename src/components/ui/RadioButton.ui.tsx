import { twMerge } from "tailwind-merge";

type RadioButtonProps<T extends string[] | number[], K extends T[number]> = {
  items: T;
  selectedValue: K;
  onChange: (value: K) => void;
  className?: string;
};

export const RadioButton = <
  T extends string[] | number[],
  K extends T[number] = T[number]
>({
  items,
  selectedValue,
  onChange,
  className,
}: RadioButtonProps<T, K>) => {
  return (
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
  );
};

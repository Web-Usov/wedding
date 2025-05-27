import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { ErrorLabel, Label } from "./InputField.ui";

type TextareaFieldProps = PropsWithChildren & {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  className?: string;
  error?: string;
};

export const TextareaField = ({
  children,
  id,
  name,
  value,
  onChange,
  rows = 3,
  className,
  error,
}: TextareaFieldProps) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{children}</Label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        className={twMerge(
          "w-full p-4 border-2 border-(--secondary) rounded-lg font-body text-base transition-all focus:outline-none focus:border-(--accent) focus:ring-2 focus:ring-(--accent)/20 bg-pink-50/5 resize-y",
          className
        )}
      />
      <ErrorLabel htmlFor={id}>{error}</ErrorLabel>
    </div>
  );
};

import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type ToastProps = PropsWithChildren & {
  type?: "success" | "error";
  className?: string;
  onClose?: () => void;
};

export const Toast = ({
  children,
  type = "success",
  className,
  onClose,
}: ToastProps) => {
  return (
    <div
      className={twMerge(
        "fixed bottom-4 right-4 p-4 rounded-lg shadow-lg z-50 max-w-xs",
        type === "success"
          ? "bg-green-500 text-white"
          : "bg-red-500 text-white",
        "animate-fade-in-up",
        className
      )}
    >
      {children}
      <button
        onClick={onClose}
        className="absolute top-1 right-1 text-white hover:text-gray-200"
      >
        ×
      </button>
    </div>
  );
};

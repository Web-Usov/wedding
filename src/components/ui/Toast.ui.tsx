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
        "fixed bottom-4 right-5 p-4 rounded-lg shadow-2xl z-50 max-w-xs",
        type === "success"
          ? "bg-white text-(--accent) outline-2 outline-green-400"
          : "bg-white text-black/80  outline-2 outline-red-400",
        "animate-fade-in-up",
        className
      )}
    >
      {children}
      <button
        onClick={onClose}
        className="absolute top-1 right-1 text-(--accent)  cursor-pointer w-6 h-6 hover:bg-(--accent)/10 rounded-full text-center text-2xl leading-none transition-all"
      >
        ×
      </button>
    </div>
  );
};

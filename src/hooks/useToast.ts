import { useState } from "react";

type ToastType = "success" | "error";

export const useToast = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<ToastType>("success");

  const show = (message: string, type: ToastType = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const hide = () => {
    setShowToast(false);
  };

  return {
    showToast,
    toastMessage,
    toastType,
    show,
    hide,
  };
};

import toast, { type ToastPosition } from "react-hot-toast";

export const copyClipboard = (value: string, position?: ToastPosition) => {
  navigator.clipboard.writeText(value);
  toast("Copied to clipboard", {
    position,
  });
};

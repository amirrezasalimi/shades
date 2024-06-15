import toast from "react-hot-toast";

export const copyClipboard = (value: string) => {
  navigator.clipboard.writeText(value);
  toast("Copied to clipboard");
};

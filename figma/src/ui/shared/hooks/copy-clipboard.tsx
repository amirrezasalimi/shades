import toast, { ToastPosition } from "react-hot-toast";
import CustomToast from "../components/custom-toast";
import CheckmarkIcon from "@ui/assets/check-circle.svg";

function writeTextToClipboard(str: string) {
  const prevActive = document.activeElement;
  const textArea = document.createElement("textarea");

  textArea.value = str;

  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";

  document.body.appendChild(textArea);

  textArea.focus();
  textArea.select();

  return new Promise((res, rej) => {
    // @ts-ignore
    document.execCommand("copy") ? res() : rej();
    textArea.remove();

    // @ts-ignore
    prevActive?.focus?.();
  });
}

export function copyClipboard(value: string) {
  toast.custom(
    () => (
      <CustomToast
        icon={<img width={18} src={CheckmarkIcon} alt="done" />}
        message={`Color Copied to clipboard`}
      />
    ),
    {
      position: "top-center",
    }
  );
  writeTextToClipboard(value);
}

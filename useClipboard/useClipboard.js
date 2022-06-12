import { useRef } from "react";

export const useClipboard = () => {
  const element = useRef();
  if (!("Clipboard" in window)) return;

  const handleCopyText = () => {
    const text = element.current.innerText;
    navigator.clipboard.writeText(text).then(() => {
      console.log("success");
    });
  };

  return { element, handleCopyText };
};
import { cn } from "@/lib/utils";
import React from "react";

const CustomButton = ({
  disabled,
  isRounded,
}: {
  disabled: boolean;
  isRounded: boolean;
}) => {
  return (
    // <button
    //   disabled={disabled}
    //   className={`px-4 py-2 ${isRounded ? 'rounded-full' : 'rounded-md'} ${disabled? `disabled:opacity-50 cursor-not-allowed` : ''} bg-blue-500 text-white hover:bg-blue-600 transition-colors`}
    // >
    //   CustomButton
    // </button>
    <button
      className={cn(
        "px-4 py-2 rounded-md bg-color-warning text-custom bg-warning",
        disabled ? "disabled:opacity-50 cursor-not-allowed" : "",
        isRounded ? "rounded-full" : ""
      )}
    >
      {" "}
      Click me
    </button>
  );
};

export default CustomButton;

import React from "react";

export default function Button({
  customizeStyle = "bg-orangeColor text-white",
  title = "SEE PRODUCT",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`${customizeStyle} p-2 w-48 h-16 font-light tracking-wider`}
    >
      {title}
    </button>
  );
}

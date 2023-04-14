import React from "react";

export default function AddPlusButton({ quantity, increase, decrease }) {
  return (
    <div className="flex bg-greyColor p-4 items-center">
      <button onClick={decrease} className="opacity-50">
        -
      </button>
      <div className="bg-greyColor w-[4rem] text-center">{quantity}</div>
      <button onClick={increase} className="opacity-50">
        +
      </button>
    </div>
  );
}

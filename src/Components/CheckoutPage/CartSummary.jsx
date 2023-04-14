import React from "react";

export default function CartSummary({ name, image, price, quantity }) {
  return (
    <div className="flex justify-between items-center space-x-8">
      <div className="flex items-center space-x-4">
        <img className="rounded-xl w-28 h-20" src={`../${image.mobile}`}></img>
        <div className="flex flex-col">
          <h3>{name}</h3>
          <h3 className="opacity-50">$ {price}</h3>
        </div>
      </div>
      <div className="opacity-50">x{quantity}</div>
    </div>
  );
}

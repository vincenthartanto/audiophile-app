import React from "react";

export default function Inthebox({ quantity, name }) {
  return (
    <div className="flex space-x-4">
      <div className="text-orangeColor">{quantity}x</div>
      <div className="opacity-50">{name}</div>
    </div>
  );
}

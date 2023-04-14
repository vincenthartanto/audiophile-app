import React from "react";
import { useSelector } from "react-redux";
import Button from "../Button";
import CartSummary from "./CartSummary";

export default function SummaryBox() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartPrice = useSelector((state) => state.cart.totalPrice);
  const shippingPrice = 50;
  const vat = (cartPrice * 20) / 100;

  return (
    <div className="p-8 space-y-4 bg-white shadow-md">
      <h1 className="text-2xl">SUMMARY</h1>
      {cartItems.map((items) => {
        return (
          <CartSummary
            key={items.id}
            name={items.name}
            image={items.image}
            quantity={items.quantity}
            price={items.price}
          ></CartSummary>
        );
      })}
      <div className="space-y-4">
        <div className="flex justify-between">
          <h1 className="opacity-50">TOTAL</h1>
          <h1>${cartPrice}</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="opacity-50">SHIPPING</h1>
          <h1>{cartItems ? shippingPrice : ""}</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="opacity-50">VAT(INCLUDED)</h1>
          <h1>${vat}</h1>
        </div>
      </div>
      <div className="flex justify-between">
        <h1 className="opacity-50">GRAND TOTAL</h1>
        <h1 className="text-orangeColor">${cartPrice + shippingPrice + vat}</h1>
      </div>
    </div>
  );
}

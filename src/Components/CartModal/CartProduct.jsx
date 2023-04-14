import React from "react";
import { useDispatch } from "react-redux";
import Image1 from "../../assets/Audiophile/cart/image-xx99-mark-two-headphones.jpg";
import useImage from "../../Hooks/useImage";
import { cartAction } from "../../Store/CartSlice";
import AddPlusButton from "../AddPlusButton";

export default function CartProduct({ id, image, price, name, quantity }) {
  const dispatch = useDispatch();
  function onClickDecrease() {
    dispatch(cartAction.removeCart({ id }));
  }
  function onClickIncrease() {
    dispatch(cartAction.addCart({ id, quantity: 1, price }));
  }
  return (
    <div className="flex justify-between items-center space-x-4">
      <img className="rounded-xl w-28 h-20" src={`../${image.mobile}`}></img>
      <div>
        <h3>{name}</h3>
        <h3 className="opacity-50">$ {price}</h3>
      </div>
      <AddPlusButton
        decrease={onClickDecrease}
        increase={onClickIncrease}
        quantity={quantity}
      ></AddPlusButton>
    </div>
  );
}

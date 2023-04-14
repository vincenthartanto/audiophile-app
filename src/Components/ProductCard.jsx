import React from "react";
import Button from "./Button";
import MarkOneHeadphone from "../assets/Audiophile/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import { useNavigate } from "react-router-dom";
export default function ProductCard({
  title,
  newProduct,
  src,
  description,
  id,
}) {
  const navigate = useNavigate();
  function onClickHandle() {
    navigate(`${id}`);
  }

  return (
    <div>
      <div className="flex flex-col items-center space-y-8 p-8">
        <img className="bg-greyColor rounded-xl" src={`${src}`}></img>
        {newProduct && (
          <h3 className="text-orangeColor tracking-widest font-extralight">
            NEW PRODUCT
          </h3>
        )}
        <h1 className="text-3xl w-52 font-light text-center">{title}</h1>
        <p className="text-center opacity-60">{description}</p>
        <Button
          onClick={onClickHandle}
          id={id}
          color="bg-orangeColor text-white"
        ></Button>
      </div>
    </div>
  );
}

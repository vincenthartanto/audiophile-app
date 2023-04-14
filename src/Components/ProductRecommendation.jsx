import React from "react";
import useImage from "../Hooks/useImage";
import Button from "./Button";
export default function ProductRecommendation({
  src,
  name,
  buttonCategory,
  onClick,
}) {
  const image = useImage(src.mobile, src.tablet, src.desktop);
  console.log(src.desktop);
  return (
    <div className="flex flex-col items-center space-y-4">
      <img src={`${image}`}></img>
      <h1 className="text-xl tracking-widest font-light">{name}</h1>
      <Button onClick={onClick} category={buttonCategory}></Button>
    </div>
  );
}

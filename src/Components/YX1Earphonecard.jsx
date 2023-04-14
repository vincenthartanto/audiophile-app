import React from "react";
import Button from "./Button";
import EarphoneYx1Mobile from "../assets/Audiophile/home/mobile/image-earphones-yx1.jpg";
import EarphoneYx1Tablet from "../assets/Audiophile/home/tablet/image-earphones-yx1.jpg";
import EarphoneYx1Desktop from "../assets/Audiophile/home/desktop/image-earphones-yx1.jpg";
import { useNavigate } from "react-router-dom";
import { getDataBySlug } from "../Store/StoreData";
import useImage from "../Hooks/useImage";
export default function YX1Earphonecard() {
  const navigate = useNavigate();
  const image = useImage(
    EarphoneYx1Mobile,
    EarphoneYx1Tablet,
    EarphoneYx1Desktop
  );
  function onClickHandle() {
    const speaker = getDataBySlug("yx1-earphones");

    navigate(`/category/earphones/${speaker.id}`);
  }
  return (
    <div className="sm:flex space-x-4">
      <img className="rounded-xl w-[50%] h-[100%]" src={image}></img>
      <div className="mt-4 bg-greyColor rounded-xl p-8 space-y-8 sm:w-1/2">
        <div className="text-3xl">YX1 EARPHONES</div>
        <Button
          onClick={onClickHandle}
          customizeStyle="bg-transparent border border-black "
        ></Button>
      </div>
    </div>
  );
}

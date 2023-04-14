import React from "react";
import Headphone from "../assets/Audiophile/home/mobile/Headphones.png";
import Arrow from "../assets/Audiophile/Arrow.svg";
import { Link } from "react-router-dom";
import useImage from "../Hooks/useImage";
export default function ShopCard({ src, title, smImg, mdImg, lgImg }) {
  const image = useImage(smImg, mdImg, lgImg);

  return (
    <div className="relative bg-greyColor  flex flex-col items-center rounded-x sm:p-4 md:p-4 md:w-[50rem] md:h-[100%]">
      <img
        className="relative -top-[3rem] h-[9rem] max-w-[100%] max-h-[100%] md:-top-20"
        src={image}
      ></img>
      <div className="">
        <div className="tracking-wider  ">{title}</div>
        <Link to={`/category/${title}`} preventScrollReset={false}>
          <div className="flex space-x-2 justify-center">
            <div className="tracking-widest opacity-70">SHOP</div>
            <img src={Arrow}></img>
          </div>
        </Link>
      </div>
    </div>
  );
}

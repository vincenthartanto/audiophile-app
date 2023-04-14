import React from "react";
import Zx9Speaker from "../assets/Audiophile/home/mobile/image-speaker-zx9.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { getDataBySlug } from "../Store/StoreData";
export default function Zx9SpeakerCard() {
  const navigate = useNavigate();

  function onClickHandle() {
    const speaker = getDataBySlug("zx9-speaker");

    navigate(`/category/speakers/${speaker.id}`);
  }
  return (
    <div className="relative bg-orangeColor flex flex-col items-center rounded-xl min-h-[50rem] justify-evenly p-8 overflow-hidden ">
      <div className="absolute top-0 border border-white w-full h-[26rem] sm:w-[32rem] md:w-[60%] rounded-full opacity-50">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2  -translate-y-1/2 border  border-white w-[90%] h-[23rem] rounded-full"></div>
      </div>
      <div className="absolute -top-16 w-[40rem] h-[40rem] border  rounded-full opacity-50 sm:w-[50rem] md:w-[79rem] md:h-[49rem] "></div>
      <img className="h-[15rem]" src={Zx9Speaker}></img>
      <h1 className="text-5xl tracking-widest font-light text-center text-white break-words w-[20rem]">
        ZX9 SPEAKER
      </h1>
      <p className="text-white text-center opacity-70">
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <Button
        onClick={onClickHandle}
        customizeStyle="bg-black text-white"
      ></Button>
    </div>
  );
}

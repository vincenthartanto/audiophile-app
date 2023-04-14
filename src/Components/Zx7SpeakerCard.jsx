import React from "react";
import Zx7SpeakerMobile from "../assets/Audiophile/home/mobile/image-speaker-zx7.jpg";
import Zx7SpeakerTablet from "../assets/Audiophile/home/tablet/image-speaker-zx7.jpg";
import Zx7SpeakerDesktop from "../assets/Audiophile/home/desktop/image-speaker-zx7.jpg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { getDataBySlug } from "../Store/StoreData";
import useImage from "../Hooks/useImage";
export default function Zx7SpeakerCard() {
  const navigate = useNavigate();
  const image = useImage(Zx7SpeakerMobile, Zx7SpeakerTablet, Zx7SpeakerDesktop);
  function onClickHandle() {
    const speaker = getDataBySlug("zx7-speaker");

    navigate(`/category/speakers/${speaker.id}`);
  }
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="bg-contain bg-no-repeat min-h-[27rem] rounded-3xl flex flex-col justify-center space-y-8 p-8 sm:bg-cover md:bg-cover"
    >
      <h1 className="text-3xl font-light tracking-widest ">ZX7 SPEAKER</h1>
      <Button
        onClick={onClickHandle}
        customizeStyle="bg-transparent border border-black "
      ></Button>
    </div>
  );
}

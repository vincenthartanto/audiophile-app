import React, { useSyncExternalStore } from "react";
import { useNavigate } from "react-router-dom";
import HeadphoneBannerMobile from "../../assets/Audiophile/home/mobile/image-header.jpg";
import HeadphoneBannerTablet from "../../assets/Audiophile/home/tablet/image-header.jpg";
import HeadphoneBannerLarge from "../../assets/Audiophile/home/desktop/image-hero.jpg";
import { getDataBySlug } from "../../Store/StoreData";
import useImage from "../../Hooks/useImage";
import useMediaQuery from "../../Hooks/useMediaQuery";
export default function HomepageHeader() {
  const navigate = useNavigate();
  const image = useImage(
    HeadphoneBannerMobile,
    HeadphoneBannerTablet,
    HeadphoneBannerLarge
  );
  function onClickHandle() {
    const headphone = getDataBySlug("xx99-mark-two-headphones");

    navigate(`/category/headphones/${headphone.id}`);
  }
  return (
    <header
      className="bg-cover min-h-[50rem] w-full bg-no-repeat flex flex-col items-center justify-center text-white space-y-8 md:bg-auto lg:bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="space-y-4">
        <h2 className="tracking-widestTitle opacity-70 font-light break-words text-2xl w-56 text-center mx-auto ">
          NEW PRODUCT
        </h2>
        <h1 className="text-5xl tracking-widest font-light text-center md:w-[22rem]">
          XX99 MARK II HEADPHONES
        </h1>
      </div>
      <p className="text-center opacity-70 md:w-[22rem]">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <button
        onClick={onClickHandle}
        className="bg-orangeColor p-2 w-44 h-16 font-light tracking-wider"
      >
        SEE PRODUCT
      </button>
    </header>
  );
}

import React from "react";
import ShopCard from "../ShopCard";
import HeadphoneMobile from "../../assets/Audiophile/home/mobile/Headphones.png";
import HeadphoneTablet from "../../assets/Audiophile/shared/tablet/image-xx99-mark-one-headphones.png";
import HeadphoneDesktop from "../../assets/Audiophile/shared/desktop/image-category-thumbnail-headphones.png";
import EarphoneMobile from "../../assets/Audiophile/home/mobile/Earphones.png";
import EarphoneTablet from "../../assets/Audiophile/product-yx1-earphones/tablet/image-category-page-preview.png";
import EarphoneDesktop from "../../assets/Audiophile/product-yx1-earphones/desktop/image-category-page-preview.png";
import SpeakerMobile from "../../assets/Audiophile/home/mobile/Speaker.png";
import SpeakerTablet from "../../assets/Audiophile/shared/tablet/image-zx9-speaker.png";
import SpeakerDesktop from "../../assets/Audiophile/shared/desktop/image-zx9-speaker.png";
import useMediaQuery from "../../Hooks/useMediaQuery";
export default function HomepageShopSection() {
  return (
    <div className="space-y-20 p-8 md:flex md:justify-between md:items-center md:space-y-0 md:space-x-4">
      <ShopCard
        smImg={HeadphoneMobile}
        mdImg={HeadphoneTablet}
        lgImg={HeadphoneDesktop}
        title="HEADPHONES"
      ></ShopCard>
      <ShopCard
        smImg={SpeakerMobile}
        mdImg={SpeakerTablet}
        lgImg={SpeakerDesktop}
        title="SPEAKERS"
      ></ShopCard>
      <ShopCard
        smImg={EarphoneMobile}
        mdImg={EarphoneTablet}
        lgImg={EarphoneDesktop}
        title="EARPHONES"
      ></ShopCard>
    </div>
  );
}

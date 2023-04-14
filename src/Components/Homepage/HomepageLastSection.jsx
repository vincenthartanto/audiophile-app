import React from "react";
import HumanWearingHeadphoneMobile from "../../assets/Audiophile/shared/mobile/image-best-gear.jpg";
import HumanWearingHeadphoneTablet from "../../assets/Audiophile/shared/tablet/image-best-gear.jpg";
import HumanWearingHeadphoneDesktop from "../../assets/Audiophile/shared/desktop/image-best-gear.jpg";
import useImage from "../../Hooks/useImage";
export default function HomepageLastSection() {
  const image = useImage(
    HumanWearingHeadphoneMobile,
    HumanWearingHeadphoneTablet,
    HumanWearingHeadphoneDesktop
  );

  return (
    <section className="p-8 space-y-8 md:flex  md:flex-col md:space-y-0 md:items-center lg:flex lg:flex-row-reverse">
      <img className="rounded-xl max-h-[100%] max-w-[100%]" src={image}></img>
      <div className="space-y-4  md:flex md:flex-col md:p-20">
        <h1 className="text-3xl text-center tracking-wider md:text-center">
          BRINGING YOU THE <span className="text-orangeColor">BEST</span> AUDIO
          GEAR
        </h1>
        <p className="text-center opacity-50 md:text-center ">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}

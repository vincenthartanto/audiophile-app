import React from "react";

export default function BannerCard({ title }) {
  return (
    <div className=" bg-black text-white w-screen p-4 mx-auto grid place-items-center text-3xl font-extralight">
      {title}
    </div>
  );
}

import React from "react";

export default function Gallery({ firstImage, secondImage, thirdImage }) {
  return (
    <div className="space-y-8 md:grid md:space-y-0 md:grid-flow-col gap-2">
      {/* <div className="bg-red-500 p-4 "></div>
      <div className="bg-blue-500 p-4 md:row-span-2"></div>
      <div className="bg-green-500 p-4"></div> */}

      <img className="rounded-xl h-[100%]" src={firstImage}></img>
      <img className="rounded-xl h-[100%]" src={secondImage}></img>
      <img className="rounded-xl h-[100%] row-span-2" src={thirdImage}></img>
    </div>
  );
}

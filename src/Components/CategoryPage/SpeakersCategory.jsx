import React from "react";
import { getDataByCategory } from "../../Store/StoreData";
import BannerCard from "../BannerCard";
import ProductCard from "../ProductCard";
import { ScrollRestoration } from "react-router-dom";
export default function SpeakersCategory() {
  const data = getDataByCategory("speakers");
  return (
    <main>
      <BannerCard title={"SPEAKERS"}></BannerCard>
      {data.map((dt) => {
        return (
          <ProductCard
            key={dt.id}
            src={dt.categoryImage.mobile}
            title={dt.name}
            description={dt.description}
            newProduct={dt.new}
            id={dt.id}
            category={dt.category}
          ></ProductCard>
        );
      })}
      <ScrollRestoration></ScrollRestoration>
    </main>
  );
}

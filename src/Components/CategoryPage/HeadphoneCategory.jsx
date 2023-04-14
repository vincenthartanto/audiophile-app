import React from "react";
import BannerCard from "../BannerCard";
import ProductCard from "../ProductCard";
import { getDataByCategory } from "../../Store/StoreData";
import { ScrollRestoration } from "react-router-dom";
export default function HeadphoneCategory() {
  const data = getDataByCategory("headphones");

  return (
    <main>
      <BannerCard title={"HEADPHONES"}></BannerCard>
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

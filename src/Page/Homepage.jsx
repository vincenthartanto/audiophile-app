import React from "react";
import HomepageHeader from "../Components/Homepage/HomepageHeader";
import HomepageShopSection from "../Components/Homepage/HomepageShopSection";
import HomepageSecondShopSection from "../Components/Homepage/HomepageSecondShopSection";
import HomepageLastSection from "../Components/Homepage/HomepageLastSection";
import { ScrollRestoration } from "react-router-dom";
export default function Homepage() {
  return (
    <main className="space-y-20">
      <HomepageHeader></HomepageHeader>
      <HomepageShopSection></HomepageShopSection>
      <HomepageSecondShopSection></HomepageSecondShopSection>
      <HomepageLastSection></HomepageLastSection>
      <ScrollRestoration />
    </main>
  );
}

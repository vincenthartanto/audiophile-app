import React from "react";
import { Outlet } from "react-router-dom";
import HomepageLastSection from "../Components/Homepage/HomepageLastSection";
import HomepageSecondShopSection from "../Components/Homepage/HomepageSecondShopSection";
import HomepageShopSection from "../Components/Homepage/HomepageShopSection";
import { ScrollRestoration } from "react-router-dom";
export default function CategoryPage() {
  return (
    <div className="space-y-16">
      <Outlet></Outlet>
      <HomepageShopSection></HomepageShopSection>
      <HomepageLastSection></HomepageLastSection>
      <ScrollRestoration />
    </div>
  );
}

import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigationBar from "../Components/MainNavigationBar";
import Footer from "../Components/Footer";

export default function RootLayout() {
  return (
    <div className="flex flex-col justify-start h-screen">
      <MainNavigationBar></MainNavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

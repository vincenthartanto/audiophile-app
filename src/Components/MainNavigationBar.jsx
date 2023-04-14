import React, { useState } from "react";
import HamburgerBar from "../assets/HamburgerBar.svg";
import CartIcon from "../assets/CartIcon.svg";
import { Link } from "react-router-dom";
import CartModal from "./CartModal";
import HomepageShopSection from "./Homepage/HomepageShopSection";
export default function MainNavigationBar() {
  const [isOpened, setIsOpened] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  function toggleOpened() {
    setIsOpened((isOpened) => !isOpened);
  }
  function toggleModal() {
    setIsModalOpened((modal) => !modal);
  }

  return (
    <div
      className={
        !isOpened
          ? `w-full flex justify-center p-4 bg-black z-50`
          : `fixed w-full flex justify-center p-4 bg-black z-50`
      }
    >
      <button className="mr-auto lg:hidden" onClick={toggleOpened}>
        <img src={HamburgerBar}></img>
      </button>
      {isOpened && (
        <nav className="absolute top-16 left-0 bg-white  w-full z-20 shadow-2xl p-8 ">
          <HomepageShopSection></HomepageShopSection>
          <div className="absolute bg-black w-full h-screen bg-opacity-30 z-20 left-0"></div>
        </nav>
      )}
      {isModalOpened && <CartModal toggleModal={toggleModal}></CartModal>}

      <h1 className="font-bold text-2xl mr-auto text-white md:mr-0">
        <Link to="/">audiophile</Link>
      </h1>

      <div className="lg:flex lg:items-center lg:w-full lg:space-x-4 lg:justify-center  hidden">
        <Link to="category/headphones">
          <div className="text-white">HEADPHONES</div>
        </Link>
        <Link to="category/speakers">
          <div className="text-white">SPEAKERS</div>
        </Link>
        <Link to="category/earphones">
          <div className="text-white">EARPHONES</div>
        </Link>
      </div>
      <button onClick={toggleModal}>
        <img className="ml-auto" src={CartIcon}></img>
      </button>
    </div>
  );
}

import React from "react";
import ReactDOM from "react-dom";
import check from "../assets/Audiophile/checkout/icon-order-confirmation.svg";
import { useRef } from "react";
import Button from "./Button";
import CartSummary from "./CheckoutPage/CartSummary";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cartAction } from "../Store/CartSlice";
export default function ThankYouModal({ toggleModal }) {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const items = cartItems[0];
  const modalRef = useRef();
  const dispatch = useDispatch();

  function clickOutside(e) {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      toggleModal();
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
  });
  return ReactDOM.createPortal(
    <div className="h-screen w-screen bg-black bg-opacity-30 fixed z-50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          ref={modalRef}
          className="flex flex-col bg-white p-8 w-[100%] h-[50rem] rounded-3x
          l space-y-8 "
        >
          <img className="h-20 w-20" src={check}></img>
          <h1 className="text-3xl break-words w-[14.5rem]">
            THANK YOU FOR YOUR ORDER
          </h1>
          <p className="opacity-50 text-xl">
            You will receive an email confirmation shortly.
          </p>

          <div className="bg-greyColor rounded-xl md:flex ">
            <div className="p-4 space-y-4">
              <CartSummary
                name={items.name ?? ""}
                image={items.image ?? ""}
                price={items.price ?? ""}
                quantity={items.quantity ?? ""}
              ></CartSummary>
              <div className="h-[0.05rem] w-full bg-black opacity-30"></div>
              <div className="opacity-50 text-sm grid place-items-center">
                {cartItems.length === 1
                  ? ""
                  : `and ${cartItems.length - 1}other items`}
              </div>
            </div>

            <div className="bg-black rounded-b-xl p-6 text-sm font-light space-y-2 md:rounded-b-none md:rounded-r-xl">
              <div className="text-white opacity-50">GRAND TOTAL</div>
              <div className="text-white">$ 5,446</div>
            </div>
          </div>
          <Button
            onClick={() => {
              dispatch(cartAction.removeAll());
              navigate("/");
            }}
            customizeStyle="bg-orangeColor w-full text-white"
            title="BACK TO HOME"
          ></Button>
        </div>
      </div>
    </div>,
    document.getElementById("thankyou-modal")
  );
}

import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { cartAction } from "../Store/CartSlice";
import CartProduct from "./CartModal/CartProduct";
import ErrorMessage from "./ErrorMessage";
export default function CartModal({ toggleModal }) {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  function onClickHandleOutside(event) {
    if (!modalRef.current.contains(event.target)) {
      toggleModal();
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", onClickHandleOutside);
    return () => {
      document.removeEventListener("mousedown", onClickHandleOutside);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className="h-screen w-screen bg-black bg-opacity-30 text-white fixed z-50">
        <div className="absolute top-[8rem] left-1/2 -translate-x-1/2   text-black ">
          <div
            ref={modalRef}
            className="flex flex-col bg-white p-8 w-[25rem] h-[50rem] rounded-3x
          l space-y-8 items-center"
          >
            <div className="flex justify-between w-full">
              <h1 className="tracking-widest ">CART({cartItems.length})</h1>
              <button
                onClick={() => {
                  dispatch(cartAction.removeAll());
                }}
                className="underline opacity-60"
              >
                Remove all
              </button>
            </div>
            {cartItems.map((cart) => {
              return (
                <CartProduct
                  id={cart.id}
                  key={cart.id}
                  image={cart.image}
                  price={cart.price}
                  name={cart.name}
                  quantity={cart.quantity}
                ></CartProduct>
              );
            })}
            <div className="flex justify-between w-full">
              <h1>Total</h1>
              <div>${totalPrice}</div>
            </div>
            {ErrorMessage && (
              <ErrorMessage message={errorMessage}></ErrorMessage>
            )}
            <Button
              onClick={() => {
                if (cartItems.length !== 0) {
                  navigate("/checkout");
                } else {
                  setErrorMessage(
                    "You can't do checkout if you don't have any product to be chosen!"
                  );
                }
              }}
              title="CHECKOUT"
            ></Button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("cart-modal")
  );
}

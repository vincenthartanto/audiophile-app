import React, { useRef, useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage";

export default function PaymentDetails({
  onChange,
  eMoneyPayment,
  eMoneyNumberValidation,
  eMoneyPinValidation,
  eMoneyNumberErrorMessage,
  eMoneyPinErrorMessage,
}) {
  const [eMoneyNumberFocus, seteMoneyNumberFocus] = useState(false);
  const [eMoneyPinFocus, seteMoneyPinFocus] = useState(false);
  return (
    <div className="space-y-4">
      <h1 className="text-orangeColor font-light tracking-widest">
        PAYMENT DETAILS
      </h1>
      <div className="flex-col space-y-4 md:space-y-0">
        <div className="space-y-4">
          <div
            className={
              "flex flex-col justify-center space-y-4 md:grid md:grid-cols-2 md:space-y-0 "
            }
          >
            <div className="">Payment Method</div>
            <div className="space-y-2">
              <div
                className={
                  eMoneyPayment === "true"
                    ? `space-x-4 border-2 border-orangeColor p-4 w-full flex`
                    : `space-x-4 border  p-4  w-full flex`
                }
              >
                <input
                  id="emoney"
                  name="eMoneyPayment"
                  type="radio"
                  onChange={onChange}
                  value={true}
                  className="bg-orangeColor peer-checked:bg-orangeColor"
                ></input>

                <label htmlFor="emoney" className="block  w-full">
                  e-Money
                </label>
              </div>
              <div
                className={
                  eMoneyPayment === "false"
                    ? `space-x-4 border-2 border-orangeColor p-4 flex`
                    : `space-x-4 border  p-4 flex`
                }
              >
                <input
                  id="cod"
                  name="eMoneyPayment"
                  type="radio"
                  onChange={onChange}
                  value={false}
                ></input>
                <label htmlFor="cod" className="block  w-full">
                  Cash on Delivery
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 gap-2">
          <div className="space-y-2">
            <h3 className="text-sm">e-Money Number</h3>
            <input
              onBlur={() => {
                seteMoneyNumberFocus(true);
              }}
              focused={eMoneyNumberFocus.toString()}
              name="eMoneyNumber"
              onChange={onChange}
              className="border-2 p-4 rounded-md w-full"
              placeholder="Enter your e-Money Number"
            ></input>
            {eMoneyNumberFocus && !eMoneyNumberValidation && (
              <ErrorMessage message={eMoneyNumberErrorMessage}></ErrorMessage>
            )}
          </div>

          <div className="space-y-2">
            <h3 className="text-sm">e-Money Pin</h3>
            <input
              onBlur={() => {
                seteMoneyPinFocus(true);
              }}
              focused={eMoneyPinFocus.toString()}
              name="eMoneyPin"
              onChange={onChange}
              className="border-2 p-4 rounded-md w-full"
              placeholder="Enter Your E-money pin"
            ></input>
            {eMoneyPinFocus && !eMoneyPinValidation && (
              <ErrorMessage message={eMoneyPinErrorMessage}></ErrorMessage>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

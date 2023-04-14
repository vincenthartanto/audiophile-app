import React, { useRef, useState } from "react";
import ErrorMessage from "../ErrorMessage";

export default function BillingDetails({
  onChange,
  nameValidation,
  emailAddressValidation,
  phoneNumberValidation,
  emailErrorMessage,
  nameErrorMessage,
  phoneNumberErrorMessage,
}) {
  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPhone, setFocusPhone] = useState(false);
  return (
    <div className="space-y-4">
      <h1 className="text-orangeColor font-light tracking-widest">
        BILLING DETAILS
      </h1>
      <div className=" flex flex-col space-y-4 md:grid  md:grid-flow-col md:space-y-0 gap-2">
        <div className="space-y-2 md:row-span-2">
          <h3 className="text-sm">Name</h3>
          <input
            onBlur={() => {
              setFocusName(true);
            }}
            focused={focusName.toString()}
            onChange={onChange}
            name="name"
            className="border-2 p-4 rounded-md w-full md:flex-grow-1"
            placeholder="Enter your name"
          ></input>
          {focusName && !nameValidation && (
            <ErrorMessage message={nameErrorMessage}></ErrorMessage>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-sm">Email</h3>
          <input
            onBlur={() => {
              setFocusEmail(true);
            }}
            focused={focusEmail.toString()}
            name="emailAddress"
            onChange={onChange}
            className="border-2 p-4 rounded-md w-full"
            placeholder="Enter your email"
          ></input>
          {focusEmail && !emailAddressValidation && (
            <ErrorMessage message={emailErrorMessage}></ErrorMessage>
          )}
        </div>

        <div className="space-y-2 md:row-span-3">
          <h3 className="text-sm">Phone Number</h3>
          <input
            onBlur={() => {
              setFocusPhone(true);
            }}
            focused={focusPhone.toString()}
            name="phoneNumber"
            onChange={onChange}
            className="border-2 p-4 rounded-md w-full"
            placeholder="Enter your phone number"
          ></input>
          {focusPhone && !phoneNumberValidation && (
            <ErrorMessage message={phoneNumberErrorMessage}></ErrorMessage>
          )}
        </div>
      </div>
    </div>
  );
}

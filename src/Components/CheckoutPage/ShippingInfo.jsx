import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage";
export default function ShippingInfo({
  onChange,
  addressValidation,
  addressErrorMessage,
  zipCodeValidation,
  zipCodeErrorMessage,
  cityValidation,
  cityErrorMessage,
  countryValidation,
  countryErrorMessage,
}) {
  const [addressFocus, setAddressFocus] = useState(false);
  const [zipCodeFocus, setZipCodeFocus] = useState(false);
  const [cityFocus, setCityFocus] = useState(false);
  const [countryFocus, setCountryFocus] = useState(false);
  return (
    <div className="space-y-4">
      <h1 className="text-orangeColor font-light tracking-widest">
        SHIPPING INFO
      </h1>
      <div className="space-y-4 md:space-y-0 md:grid md:grid-flow-cols md:gap-2">
        <div className="space-y-2 md:col-span-2">
          <h3 className="text-sm">Address</h3>
          <input
            onBlur={() => {
              setAddressFocus(true);
            }}
            focused={addressFocus.toString()}
            name="address"
            onChange={onChange}
            className="border-2 p-4 rounded-md w-full"
            placeholder="Enter your Address"
          ></input>
          {addressFocus && !addressValidation && (
            <ErrorMessage message={addressErrorMessage}></ErrorMessage>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-sm">Zip Code</h3>
          <input
            onBlur={() => {
              setZipCodeFocus(true);
            }}
            focused={zipCodeFocus.toString()}
            name="zipCode"
            onChange={onChange}
            className="border-2 p-4 rounded-md w-full"
            placeholder="Enter your zip code"
          ></input>
          {zipCodeFocus && !zipCodeValidation && (
            <ErrorMessage message={zipCodeErrorMessage}></ErrorMessage>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-sm">City</h3>
          <input
            onBlur={() => {
              setCityFocus(true);
            }}
            focused={cityFocus.toString()}
            name="city"
            onChange={onChange}
            className="border-2 p-4 rounded-md w-full"
            placeholder="Enter your city"
          ></input>
          {cityFocus && !cityValidation && (
            <ErrorMessage message={cityErrorMessage}></ErrorMessage>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-sm">Country</h3>
          <input
            onBlur={() => {
              setCountryFocus(true);
            }}
            focused={countryFocus.toString()}
            name="country"
            onChange={onChange}
            className="border-2 p-4 rounded-md w-full"
            placeholder="Enter Your Country"
          ></input>
          {countryFocus && !countryValidation && (
            <ErrorMessage message={countryErrorMessage}></ErrorMessage>
          )}
        </div>
      </div>
    </div>
  );
}

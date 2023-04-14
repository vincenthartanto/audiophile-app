import React, { useReducer, useState } from "react";
import Card from "../Components/Card";
import BillingDetails from "../Components/CheckoutPage/BillingDetails";
import PaymentDetails from "../Components/CheckoutPage/PaymentDetails";
import ShippingInfo from "../Components/CheckoutPage/ShippingInfo";
import SummaryBox from "../Components/CheckoutPage/SummaryBox";
import GoBackButton from "../Components/GoBackButton";
import Button from "../Components/Button";
import ThankYouModal from "../Components/ThankYouModal";
import { ScrollRestoration } from "react-router-dom";
import ErrorMessage from "../Components/ErrorMessage";
function validate(
  inputValue,
  regex,
  state,
  isValid,
  targetedErrormessage,
  errorMsg
) {
  const reg = new RegExp(regex);
  if (reg.test(inputValue)) {
    return { ...state, [isValid]: true, [targetedErrormessage]: "" };
  } else {
    return { ...state, [isValid]: false, [targetedErrormessage]: errorMsg };
  }
}

function formReducer(state, action) {
  switch (action.type) {
    case "INPUT":
      const isValid = {
        name: "isNameValid",
        email: "isEmailValid",
        phoneNumber: "isPhoneNumberValid",
        address: "isAddressValid",
        zipCode: "isZipCodeValid",
        city: "isCityValid",
        country: "isCountryValid",
        eMoneyNumber: "isEmoneyNumberValid",
        eMoneyPin: "isEmoneyPinValid",
      };
      const errorMessage = {
        name: "nameErrorMessage",
        email: "emailErrorMessage",
        phoneNumber: "phoneNumberErrorMessage",
        address: "addressErrorMessage",
        zipCode: "zipCodeErrorMessage",
        city: "cityErrorMessage",
        country: "countryErrorMessage",
        eMoneyNumber: "eMoneyNumberErrorMessage",
        eMoneyPin: "eMoneyPinErrorMessage",
      };
      const actionValue = action.action.value ?? "";
      const actionInput = action.action.input ?? "";

      if (actionInput === "name") {
        const regex = /^[a-zA-Z ]+$/;

        if (actionValue.length < 3) {
          return {
            ...state,
            [isValid.name]: false,
            [errorMessage.name]: "Name must be more than 3 letters!",
          };
        }
        return validate(
          actionValue,
          regex,
          state,
          isValid.name,
          errorMessage.name,
          "Name not supposed to have number!"
        );
      }
      if (actionInput === "emailAddress") {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return validate(
          actionValue,
          regex,
          state,
          isValid.email,
          errorMessage.email,
          "Enter valid email address!"
        );
      }
      if (actionInput === "phoneNumber") {
        const regex = /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/;

        if (actionValue.length < 10 || actionValue.length > 15) {
          return {
            ...state,
            [isValid.phoneNumber]: false,
            [errorMessage.phoneNumber]:
              "Phone Number must be at least 10 and not more than 15!",
          };
        }
        return validate(
          actionValue,
          regex,
          state,
          isValid.phoneNumber,
          errorMessage.phoneNumber,
          "Enter valid phone number!"
        );
      }
      if (actionInput === "address") {
        const regex = /([a-zA-z0-9/\\''(),-\s]{2,255})$/;
        if (actionValue.length < 10) {
          return {
            ...state,
            [isValid.address]: false,
            [errorMessage.address]:
              "Your address must be completed with at least 10 letters!",
          };
        }
        return validate(
          actionValue,
          regex,
          state,
          isValid.address,
          errorMessage.address,
          "Enter valid address!"
        );
      }
      if (actionInput === "zipCode") {
        const regex = /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/;
        if (actionValue.length !== 5) {
          return {
            ...state,
            [isValid.zipCode]: false,
            [errorMessage.zipCode]: "Zip code must be only 5 numbers!",
          };
        }
        return validate(
          actionValue,
          regex,
          state,
          isValid.zipCode,
          errorMessage.zipCode,
          "Enter Valid Zip Code"
        );
      }
      if (actionInput === "city") {
        const regex = /^[a-zA-Z ]+$/;
        if (actionValue.length < 2) {
          return {
            ...state,
            [isValid.city]: false,
            [errorMessage.city]: "City name must be more than 3 words!",
          };
        }
        return validate(
          actionValue,
          regex,
          state,
          isValid.city,
          errorMessage.city,
          "Enter your Valid City!"
        );
      }
      if (actionInput === "country") {
        if (actionValue.length < 2) {
          return {
            ...state,
            [isValid.country]: false,
            [errorMessage.country]: "Country name must be more than 2 words! ",
          };
        }
        const regex = /[a-zA-Z]{2,}/;
        return validate(
          actionValue,
          regex,
          state,
          isValid.country,
          errorMessage.country,
          "Enter your valid Country"
        );
      }
      if (actionInput === "eMoneyNumber") {
        const regex = /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/;
        if (actionValue.length !== 10) {
          return {
            ...state,
            [isValid.eMoneyNumber]: false,
            [errorMessage.eMoneyNumber]: "E-money number must be 10 digits!",
          };
        }
        return validate(
          actionValue,
          regex,
          state,
          isValid.eMoneyNumber,
          errorMessage.eMoneyNumber,
          "Enter your valid e-money Number"
        );
      }
      if (actionInput === "eMoneyPin") {
        const regex = /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/;
        if (actionValue.length !== 6) {
          return {
            ...state,
            [isValid.eMoneyPin]: false,
            [errorMessage.eMoneyPin]: "E-money number must be 6 digits!",
          };
        }
        return validate(
          actionValue,
          regex,
          state,
          isValid.eMoneyPin,
          errorMessage.eMoneyPin,
          "Enter your valid e-Money pin!"
        );
      }
    case "SUBMIT":
      if (
        state.isNameValid &&
        state.isEmailValid &&
        state.isPhoneNumberValid &&
        state.isAddressValid &&
        state.isZipCodeValid &&
        state.isCityValid &&
        state.isCountryValid &&
        state.isEmoneyNumberValid
      ) {
        return {
          ...state,
          formErrorMessage: null,
        };
      } else {
        return {
          ...state,
          formErrorMessage:
            "One of your data or many still not valid, please check again!",
        };
      }
    default:
      return { ...state, [action.action.input]: action.action.value };
  }
}
// action.action.input : value

export default function CheckOutPage() {
  const [focus, setFocus] = useState(false);
  const [modal, setModal] = useState(false);
  const [state, dispatch] = useReducer(formReducer, {
    name: "",
    isNameValid: false,
    nameErrorMessage: "Name must not be empty",
    emailAddress: "",
    isEmailValid: false,
    emailErrorMessage: "Email must not be empty",
    phoneNumber: "",
    isPhoneNumberValid: false,
    phoneNumberErrorMessage: "Phone Number must not be empty",
    address: "",
    isAddressValid: false,
    addressErrorMessage: "Address must not be empty",
    zipCode: "",
    isZipCodeValid: false,
    zipCodeErrorMessage: "Zip Code must not be empty",
    city: "",
    isCityValid: false,
    cityErrorMessage: "City must not be empty",
    country: "",
    countryErrorMessage: "Country must not be empty",
    isCountryValid: false,
    emoney: false,
    cod: false,
    eMoneyNumber: "",
    eMoneyNumberErrorMessage: "e-Money number must not be empty",
    isEmoneyNumberValid: false,
    eMoneyPin: "",
    eMoneyPinErrorMessage: "e-Money pin must not be empty",
    isEmoneyPinValid: false,
    eMoneyPayment: false,
    formErrorMessage: null,
  });
  function onChange(e) {
    const action = {
      input: e.target.name, // input name
      value: e.target.value, // input value
    };
    dispatch({ type: "INPUT", action }); // the same as dispatch({input:e.target.name,value:e.target.value})
  }
  function handleFocus(e) {
    setFocus(true);
  }
  function toggleModal() {
    setModal((modal) => !modal);
  }

  return (
    <Card>
      <GoBackButton>x</GoBackButton>
      <div className="p-7 space-y-8 bg-white shadow-md">
        {modal && <ThankYouModal toggleModal={toggleModal}></ThankYouModal>}
        <h1 className="text-3xl font-md tracking-widest">CHECKOUT</h1>
        <BillingDetails
          handleFocus={handleFocus}
          focus={focus}
          nameValidation={state.isNameValid}
          nameErrorMessage={state.nameErrorMessage}
          phoneValidation={state.isPhoneNumberValid}
          phoneNumberErrorMessage={state.phoneNumberErrorMessage}
          emailAddressValidation={state.isEmailValid}
          emailErrorMessage={state.emailErrorMessage}
          onChange={onChange}
        ></BillingDetails>
        <ShippingInfo
          addressValidation={state.isAddressValid}
          addressErrorMessage={state.addressErrorMessage}
          zipCodeValidation={state.isZipCodeValid}
          zipCodeErrorMessage={state.zipCodeErrorMessage}
          cityValidation={state.isCityValid}
          cityErrorMessage={state.cityErrorMessage}
          countryValidation={state.countryValidation}
          countryErrorMessage={state.countryErrorMessage}
          onChange={onChange}
        ></ShippingInfo>
        <PaymentDetails
          eMoneyPayment={state.eMoneyPayment}
          eMoneyNumberValidation={state.isEmoneyNumberValid}
          eMoneyPinValidation={state.isEmoneyPinValid}
          eMoneyNumberErrorMessage={state.eMoneyNumberErrorMessage}
          eMoneyPinErrorMessage={state.eMoneyPinErrorMessage}
          onChange={onChange}
        ></PaymentDetails>
      </div>
      <SummaryBox></SummaryBox>
      {state.formErrorMessage && (
        <ErrorMessage message={state.formErrorMessage}></ErrorMessage>
      )}
      <Button
        onClick={() => {
          dispatch({ type: "SUBMIT" });
          if (state.formErrorMessage === null) {
            toggleModal();
          }
        }}
        customizeStyle="w-full bg-orangeColor text-white"
        title="CONTINUE & PAY"
      ></Button>
      <ScrollRestoration />
    </Card>
  );
}

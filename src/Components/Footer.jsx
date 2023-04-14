import React from "react";
import InstagramIcon from "../assets/InstagramIcon.svg";
import TwitterIcon from "../assets/TwitterIcon.svg";
import FacebookIcon from "../assets/FacebookIcon.svg";
import { footerStyles } from "../Style/styles";
export default function Footer() {
  return (
    <footer className={`${footerStyles.footer}`}>
      <div className={`${footerStyles.horizontalCenterOrangeColor}`}></div>
      <h1 className="font-bold text-3xl md:mr-auto">audiophile</h1>
      <div className="md:flex md:justify-start md:w-full md:space-x-4 ">
        <div className={`${footerStyles.footerFontNavigation}`}>HOME</div>
        <div className={`${footerStyles.footerFontNavigation}`}>HEADPHONES</div>
        <div className={`${footerStyles.footerFontNavigation}`}>SPEAKERS</div>
        <div className={`${footerStyles.footerFontNavigation}`}>EARPHONES</div>
      </div>
      <p className={`${footerStyles.footerParagraph} py-6 md:text-left `}>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="md:flex md:justify-between md:items-center w-full">
        <p className={`${footerStyles.footerParagraph} pb-6`}>
          Copyright 2021. All rights Reserved
        </p>
        <div className="flex space-x-4">
          <img src={FacebookIcon}></img>
          <img src={TwitterIcon}></img>
          <img src={InstagramIcon}></img>
        </div>
      </div>
    </footer>
  );
}

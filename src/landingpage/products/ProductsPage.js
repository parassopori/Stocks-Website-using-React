import React from "react";
import Hero from "./Hero";
import LeftSection from "./Leftisection";
import RightSection from "./Rightsection";
import Universe from "./Universe";
import OpenAccount from "../OpenAccount";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/leftsection.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        appStore=""
        googlePlay=""
      />

      <RightSection title="Console" discription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore="Learn More" imageURL="media/images/Rightsection.png" />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        appStore=""
        googlePlay=""
      />
      <RightSection title="Kite Connect API" discription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore="Learn More" imageURL="media/images/kiteconnect.png" />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        appStore=""
        googlePlay=""
      />
      <p>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <Universe />
      <OpenAccount />
    </>
  );
}

export default ProductPage;

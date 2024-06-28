import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landingpage/home/Homepage";
import Signup from "./landingpage/signup/SignUpPage";
import AboutPage from "./landingpage/about/AboutPage";
import PricingPage from "./landingpage/pricing/PricingPage";
import SupportPage from "./landingpage/support/SupportPage";
import NavBar from "./landingpage/Navbar";
import Footer from "./landingpage/Footer";
import ProductsPage from "./landingpage/products/ProductsPage";
import Notfound from './landingpage/Notfound';
import SignUpPage from "./landingpage/signup/SignUpPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<SignUpPage />}/>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/product" element={<ProductsPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="*" element={<Notfound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);

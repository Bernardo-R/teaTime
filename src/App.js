import React from "react";
// import { } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StoreFront from "./components/StoreFront";
import About from "./components/Pages/AboutPage";
import Home from "./components/Pages/Home";
import Contact from "./components/Footer/Contact"
import FAQ from "./components/Footer/FAQ"
import PrivacyPolicy from "./components/Footer/PrivacyPolicy"
import Returns from "./components/Footer/Returns"
import Shipping from "./components/Footer/Shipping"
import Terms from "./components/Footer/Terms"
import Warranty from "./components/Footer/Warranty"

function App() {
  return (
    <>
      <Navbar />
      <Router>
        {/* <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 border py-4"> */}
        <Routes>
          <Route  path="/home" element={<Home/>}></Route>
          <Route path="/" element={<StoreFront/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/faq" element={<FAQ/>}></Route>
          <Route path="/privacy" element={<PrivacyPolicy/>}></Route>
          <Route path="/returns" element={<Returns/>}></Route>
          <Route path="/shipping" element={<Shipping/>}></Route>
          <Route path="/terms" element={<Terms/>}></Route>
          <Route path="/warranty" element={<Warranty/>}></Route>
        </Routes>
        {/* </div> */}
      </Router>
      <Footer routes={[
         {path: "/home", name: "Home"},
         {path: "/about", name: "About"},
         {path: "contact", name: "Contact"},
         {path: "faq", name: "FAQ"},
         {path: "privacy", name: "Privacy"},
         {path: "returns", name: "Returns"},
         {path: "shipping", name: "Shipping"},
         {path: "terms", name: "Terms"},
         {path: "warranty", name: "Warranty"}
      ]
      }
      
      />
    </>
  );
}

export default App;

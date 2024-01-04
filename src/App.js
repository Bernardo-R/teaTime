import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StoreFront from "./components/StoreFront";
import AboutPage from "./components/Pages/AboutPage";
import Home from "./components/Pages/Home";
import Contact from "./components/Footer/Contact";
import FAQ from "./components/Footer/FAQ";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import Returns from "./components/Footer/Returns";
import Shipping from "./components/Footer/Shipping";
import Terms from "./components/Footer/Terms";
import Warranty from "./components/Footer/Warranty";
import ProductList from "./components/ProductList";
import ProductOverview from "./components/ProductOverview";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (productId) => {
    setSelectedProduct(productId);
  };
  //  const API_URL = "https://boonakitea.cyclic.app/api/all"

  //  const [teaList, setTeaList] = useState([])

  //  const getTeaList = async () => {
  //     try {
  //       const resp = await fetch(API_URL); // response from the api
  //       const data = await resp.json(); //extracting json from response object

  //       setTeaList(data);
  //     } catch (error) {
  //       console.error("Something went wrong", error);
  //     }
  //   };

  //   useEffect(() => {
  //     getTeaList();
  //   }, []);

  //   console.log(teaList)

  return (
    <>
      <Navbar />
      <Router>
        {/* <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 border py-4"> */}
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<StoreFront />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
          <Route path="/privacy" element={<PrivacyPolicy />}></Route>
          <Route path="/returns" element={<Returns />}></Route>
          <Route path="/shipping" element={<Shipping />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/warranty" element={<Warranty />}></Route>
          <Route
            path="/store"
            element={<ProductList onProductClick={handleProductClick} />}
          />
          <Route
            path="/productOverview"
            element={<ProductOverview selectedProduct={selectedProduct} />}
          />

          <Route path="/productOverview/:id" element={<ProductOverview />} />
        </Routes>
        {/* </div> */}
      </Router>
      <Footer
        routes={[
          { path: "/home", name: "Home" },
          { path: "/about", name: "AboutPage" },
          { path: "contact", name: "Contact" },
          { path: "faq", name: "FAQ" },
          { path: "privacy", name: "Privacy" },
          { path: "returns", name: "Returns" },
          { path: "shipping", name: "Shipping" },
          { path: "terms", name: "Terms" },
          { path: "warranty", name: "Warranty" },
        ]}
      />
    </>
  );
}

export default App;

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
import ProductCard from "./components/ProductCard";

function App() {
  const apiUrl = "https://teatimeapi-production.up.railway.app/api/data";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductList = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.log(error);
      }
    };
    getProductList();
  }, []);
  // const { data, loading, error } = useApi(apiUrl);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Something went wrong: {error.message}</p>;
  // const [selectedProduct, setSelectedProduct] = useState(null);

  // const handleProductClick = (productId) => {
  //   console.log(`Product clicked with ID: ${productId}`);
  // };

  return (
    <>
      <Navbar />
      <Router>
        {/* <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 border py-4"> */}
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<StoreFront products={products} />}></Route>
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
            element={<ProductList products={products} />}
          ></Route>
          <Route
            path="/productCard/:id"
            render={({ match }) => {
              const productId = match.params.id;
              const productDetails = products.find(
                (product) => product.id === parseInt(productId, 10)
              );
              return <ProductCard productDetails={productDetails} />;
            }}
          />
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

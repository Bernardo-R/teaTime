import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StoreFront from "./components/StoreFront";
import AboutPage from "./components/Pages/AboutPage";
import Contact from "./components/Footer/Contact";
import FAQ from "./components/Footer/FAQ";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import Returns from "./components/Footer/Returns";
import Shipping from "./components/Footer/Shipping";
import Terms from "./components/Footer/Terms";
import Warranty from "./components/Footer/Warranty";
import ProductList from "./components/ProductList";
import ProductOverview from "./components/ProductOverview";
import SearchResult from "./components/SearchResult";
import SearchBar from "./components/SearchBar";
import Login from "./components/auth/Login";
import ShoppingCart from "./components/ShoppingCart";
import CreateAccount from "./components/auth/CreateAccount";
import SearchPO from "./components/SearchPO";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);

  //SearchQuery is the value being typed into the controlled SearchBar input
  const [searchQuery, setSearchQuery] = useState("");

  // SearchInput is the value saved from searchQuery. SearchInput is used to pass the value around
  // without causing issues with the change of the value in searchQuery
  const [searchInput, setSearchInput] = useState("");
  const [productsInCart, setProductsInCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Ensure each item in the cart has a quantity field
    const cartWithQuantity = storedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1, // Set default quantity to 1 if not present
    }));

    return cartWithQuantity;
  });

  const addProductToCart = (selectedProduct) => {
    // Retrieve existing cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the selected product already exists in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item._id === selectedProduct._id
    );

    if (existingProductIndex !== -1) {
      // Product already exists, increment the quantity
      cart[existingProductIndex].quantity += 1;
    } else {
      // Product doesn't exist, add it to the cart
      cart.push({ ...selectedProduct, quantity: 1 });
    }

    // Update localStorage with the modified cart
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(localStorage.getItem("searchInput"));
    setSearchInput(localStorage.getItem("searchInput"));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://teatimeapi-production.up.railway.app/api/data"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //Grabbing the product ID for navigating to PO
  const handleProductClick = (productId) => {
    setSelectedProduct(productId);
    localStorage.setItem("selectedProduct", JSON.stringify(productId));
    JSON.parse(localStorage.getItem("selectedProduct"));
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Router>
        <Navbar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          productsInCart={productsInCart}
        />
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setSearchInput={setSearchInput}
        />

        <Routes>
          <Route
            path="/"
            element={
              <StoreFront
                products={products}
                onProductClick={handleProductClick}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
            }
          ></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
          <Route path="/privacy" element={<PrivacyPolicy />}></Route>
          <Route path="/returns" element={<Returns />}></Route>
          <Route path="/shipping" element={<Shipping />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/warranty" element={<Warranty />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<CreateAccount />}></Route>
          <Route
            path="/shoppingCart"
            element={
              <ShoppingCart
                productsInCart={productsInCart}
                setProductsInCart={setProductsInCart}
              />
            }
          ></Route>
          <Route
            path="/store"
            element={
              <ProductList
                onProductClick={handleProductClick}
                products={products}
              />
            }
          />
          <Route
            path="/productOverview/:id"
            element={
              <ProductOverview
                selectedProduct={selectedProduct}
                products={products}
                setSearchQuery={setSearchQuery}
                searchInput={searchInput}
                addProductToCart={addProductToCart}
              />
            }
          />
          <Route
            path="/searchPO/:id"
            element={
              <SearchPO
                selectedProduct={selectedProduct}
                products={products}
                setSearchQuery={setSearchQuery}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                addProductToCart={addProductToCart}
              />
            }
          />

          <Route
            path={`/searchResult/${searchInput}`}
            element={
              <SearchResult
                products={products}
                searchQuery={searchQuery}
                onProductClick={handleProductClick}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
            }
          />
        </Routes>
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

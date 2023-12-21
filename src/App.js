import React from "react";
// import { } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StoreFront from "./components/StoreFront";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";

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
        </Routes>
        {/* </div> */}
      </Router>
      <Footer />
    </>
  );
}

export default App;

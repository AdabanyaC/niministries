import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./containers/AboutUs";
import ContactUs from "./containers/ContactUs";
import Home from "./containers/Home";
import Resources from "./containers/Resources";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

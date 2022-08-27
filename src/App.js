import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./containers/AboutUs";
import Home from "./containers/Home";
import Resources from "./containers/Resources";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

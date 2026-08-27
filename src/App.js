import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./containers/AboutUs";
import ContactUs from "./containers/ContactUs";
import Home from "./containers/Home";
import MeetPNI from "./containers/MeetPNI";
import Resources from "./containers/Resources";
import Seo from "./components/Seo";
import EventPage from "./containers/EventPage";

const App = () => {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Seo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/meet-pni" element={<MeetPNI />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/event/:slug" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

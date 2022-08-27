import React from "react";
import Logo from "./../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { DefaultBtnNoArrow } from "./Buttons";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-white p-6 rounded-md">
      <div>
        <NavLink to={"/"}>
          <img src={Logo} alt="NIM Logo" />
        </NavLink>
      </div>
      <div className="self-center">
        <ul className="flex gap-8 font-medium">
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/resources">Resources</NavLink>
          </li>
          <li>
            <NavLink to="/get-involved">Get Involved</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <NavLink to="/contact-us">
          <DefaultBtnNoArrow btnText={"Contact Us"} />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

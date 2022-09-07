import React, { Fragment, useState } from "react";
import Logo from "./../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { DefaultBtnNoArrow } from "./Buttons";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <Fragment>
      <div className="flex justify-between bg-white p-6 rounded-md nav-shadow">
        <div>
          <NavLink to={"/"}>
            <img src={Logo} alt="NIM Logo" />
          </NavLink>
        </div>
        <div className="self-center block lg:hidden" onClick={handleToggleNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-menu-button-wide h-7 w-7"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13z" />
            <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
        <div className="self-center hidden lg:block">
          <ul className="flex gap-8 font-medium">
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/resources">Resources</NavLink>
            </li>
            {/* <li>
            <NavLink to="/get-involved">Get Involved</NavLink>
          </li> */}
            <li>
              <NavLink to="/meet-pni">Meet PNI</NavLink>
            </li>
          </ul>
        </div>
        <div className=" hidden lg:block">
          <NavLink to="/contact-us">
            <DefaultBtnNoArrow btnText={"Contact Us"} />
          </NavLink>
        </div>
      </div>
      {/* Mobile Nav */}
      <div
        className={`mt-4 bg-white rounded lg:hidden ${
          toggleNav ? `block` : `hidden`
        }`}
      >
        <ul className="font-semibold">
          <li className="p-4">
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <hr />
          <li className="p-4">
            <NavLink to="/resources">Resources</NavLink>
          </li>
          <hr />
          <li className="p-4">
            <NavLink to="/sort">Meet PNI</NavLink>
          </li>
          <hr />
        </ul>
        <div className="p-4">
          <NavLink to="/contact-us">
            <button className="bg-blue text-white px-10 py-4 rounded-2xl text-sm w-full">
              Contact Us
            </button>
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;

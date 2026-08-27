import React, { Fragment, useEffect, useState } from "react";
import Logo from "./../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { DefaultBtnNoArrow } from "./Buttons";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const navItems = [
    { label: "About Us", to: "/about-us" },
    { label: "Resources", to: "/resources" },
    { label: "Meet PNI", to: "/meet-pni" },
    { label: "Event", to: "/event/osm-2026" },
  ];

  const handleToggleNav = () => {
    setToggleNav((isOpen) => !isOpen);
  };

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setToggleNav(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <Fragment>
      <div className="flex justify-between bg-white p-6 rounded-md nav-shadow">
        <div>
          <NavLink to={"/"}>
            <img src={Logo} alt="NIM Logo" />
          </NavLink>
        </div>
        <button
          type="button"
          className="group relative flex h-11 w-11 items-center justify-center self-center rounded-full border border-mist bg-white text-blue transition-colors duration-200 hover:bg-devotional focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 motion-reduce:transition-none lg:hidden"
          onClick={handleToggleNav}
          aria-expanded={toggleNav}
          aria-controls="mobile-navigation"
          aria-label={toggleNav ? "Close navigation" : "Open navigation"}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 motion-reduce:transition-none ${
                toggleNav ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 motion-reduce:transition-none ${
                toggleNav ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 motion-reduce:transition-none ${
                toggleNav ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
        <div className="self-center hidden lg:block">
          <ul className="flex gap-8 font-medium">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            ))}
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
        id="mobile-navigation"
        data-state={toggleNav ? "open" : "closed"}
        aria-hidden={!toggleNav}
        className={`mt-4 overflow-hidden rounded-2xl border border-mist bg-white nav-shadow transition-[max-height,opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none lg:hidden ${
          toggleNav
            ? "visible max-h-[32rem] translate-y-0 opacity-100"
            : "invisible max-h-0 -translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="divide-y divide-mist/70 px-2 pt-2 font-semibold">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-4 transition-colors motion-reduce:transition-none ${
                    isActive
                      ? "bg-devotional text-blue"
                      : "text-blackalt hover:bg-devotional hover:text-blue"
                  }`
                }
                to={item.to}
                onClick={() => setToggleNav(false)}
              >
                  {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="p-4">
          <NavLink to="/contact-us" onClick={() => setToggleNav(false)}>
            <button className="w-full rounded-2xl bg-blue px-10 py-4 text-sm text-white transition-colors hover:bg-blackalt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 motion-reduce:transition-none">
              Contact Us
            </button>
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;

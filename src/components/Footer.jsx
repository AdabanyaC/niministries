import React from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from "./../assets/icons/facebook.svg";
import InstagramIcon from "./../assets/icons/instagram.svg";
import LinkedInIcon from "./../assets/icons/linkedin.svg";
import TwitterIcon from "./../assets/icons/twitter.svg";

const Footer = () => {
  return (
    <div className="bg-blue px-4 py-12 lg:px-28 lg:py-20">
      <div className="flex justify-center gap-8 text-white">
        <NavLink to={"/about-us"}>About Us</NavLink>
        <NavLink to={"/resources"}>Resources</NavLink>
        <NavLink to={"/contact-us"}>Contact Us</NavLink>
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row gap-8 text-white mt-10">
        <div className="lg:self-end">
          <p>Copyright 2022 © Niministries.org</p>
        </div>
        <div className="flex gap-4 lg:mt-10">
          <img src={FacebookIcon} alt="Facebook Icon" />
          <img src={InstagramIcon} alt="Instagram Icon" />
          <img src={LinkedInIcon} alt="LinkedIn Icon" />
          <img src={TwitterIcon} alt="Twitter Icon" />
        </div>
        <div className="lg:self-end">
          <a href="mailto://nelsoniheagwamministries@gmail.com">
            nelsoniheagwamministries@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import HeroImg1 from "./../assets/hero/heroImg1.svg";
import HeroImg2 from "./../assets/hero/heroImg2.svg";
import HeroImg3 from "./../assets/hero/heroImg3.svg";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import RightArrowIcon from "./../assets/icons/arrowRight.svg";

const Hero = () => {
  return (
    <div className="flex my-20">
      <div className="self-center w-full lg:w-1/2">
        <h1 className="text-blue font-extrabold text-5xl lg:text-7xl w-full lg:w-3/4 lgtracking-wide">
          Be stirred as you grow
        </h1>
        <p className="text-xl mt-10 lg:mt-5 w-full lg:w-3/4 text-justify">
          Welcome to Nelson Iheagwam Ministries, We are commited to helping you
          grow and enjoy progress in the faith.
        </p>
        <div className="mt-10 flex gap-4">
          <PrimaryButton
            btnText={"Talk to us"}
            href="contact-us"
            icon={
              <img
                src={RightArrowIcon}
                alt="Right Arrow Icon"
                className="self-center"
              />
            }
          />
          <SecondaryButton btnText={"Get Edified"} href="resources" />
        </div>
      </div>
      <div className="md:flex gap-4 hidden">
        <img src={HeroImg1} alt="" className="mt-24" />
        <img src={HeroImg2} alt="" className="mt-12" />
        <img src={HeroImg3} alt="" />
      </div>
    </div>
  );
};

export default Hero;

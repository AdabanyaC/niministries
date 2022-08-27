import React from "react";
import HeroImg1 from "./../assets/hero/heroImg1.svg";
import HeroImg2 from "./../assets/hero/heroImg2.svg";
import HeroImg3 from "./../assets/hero/heroImg3.svg";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import RightArrowIcon from "./../assets/icons/arrowRight.svg";

const Hero = () => {
  return (
    <div className="flex">
      <div className="self-center w-1/2">
        <h1 className="text-blue font-extrabold text-7xl w-3/4 tracking-wide">
          Be stired as you grow
        </h1>
        <p className="text-xl mt-5 w-3/4 text-justify">
          Welcome to Nelson Iheagwam Ministries, We are commited to helping you
          grow and enjoy progress in the faith.
        </p>
        <div className="mt-5 flex gap-4">
          <PrimaryButton
            btnText={"Talk to us"}
            icon={
              <img
                src={RightArrowIcon}
                alt="Right Arrow Icon"
                className="self-center"
              />
            }
          />
          <SecondaryButton btnText={"Get Edified"} />
        </div>
      </div>
      <div className="flex gap-4">
        <img src={HeroImg1} alt="" className="mt-28" />
        <img src={HeroImg2} alt="" className="mt-14" />
        <img src={HeroImg3} alt="" />
      </div>
    </div>
  );
};

export default Hero;

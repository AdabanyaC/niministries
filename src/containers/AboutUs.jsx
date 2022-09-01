import React, { Fragment } from "react";
import AboutOurLead from "../components/AboutOurLead";
import Navbar from "../components/Navbar";
import PartnershipCTA from "../components/PartnershipCTA";
import WhoWeAre from "../components/WhoWeAre";
import AboutImage1 from "./../assets/hero/abtImg1.svg";
import AboutImage2 from "./../assets/hero/abtImg2.svg";
import AboutImage3 from "./../assets/hero/abtImg3.svg";
import AboutImage4 from "./../assets/hero/abtImg4.svg";

const AboutUs = () => {
  return (
    <Fragment>
      <div className="">
        <div className="bg-[#F4FBFF] h-fit px-28 py-12">
          <Navbar />
          <h1 className="text-5xl text-blue text-center font-bold w-[892px] m-auto mt-28">
            Men saved, trained and ministry duplicated in the lives of many
          </h1>
          <div className="mt-28 flex justify-center gap-10">
            <div>
              <img src={AboutImage1} alt="Men and women worshipping Jesus" />
            </div>
            <div className="mt-28">
              <img src={AboutImage2} alt="Men and women worshipping Jesus" />
            </div>
            <div>
              <img src={AboutImage3} alt="Men and women worshipping Jesus" />
            </div>
            <div className="mt-28">
              <img src={AboutImage4} alt="Men and women worshipping Jesus" />
            </div>
          </div>
        </div>
        <div className="mt-32">
          <WhoWeAre />
        </div>
        <div className="mt-32">
          <AboutOurLead />
        </div>
        <div className="mt-32">
          <PartnershipCTA />
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;

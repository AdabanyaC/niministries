import React, { Fragment } from "react";
import AboutOurLead from "../components/AboutOurLead";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsletterCTA from "../components/NewsletterCTA";
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
        <div className="bg-[#F4FBFF] h-fit p-4 lg:px-28 lg:py-12">
          <Navbar />
          <h1 className="text-3xl lg:text-5xl text-blue text-center font-extrabold lg:w-[892px] lg:m-auto mt-14 lg:mt-28">
            Men saved, trained and sent to do the work of ministry.
          </h1>
          <div className="mt-28 mb-16 flex justify-center gap-4 lg:gap-10">
            <div>
              <img
                src={AboutImage1}
                alt="Men and women worshipping Jesus"
                className="w-[80px] lg:w-auto"
              />
            </div>
            <div className="mt-10 lg:mt-24">
              <img
                src={AboutImage2}
                alt="Men and women worshipping Jesus"
                className="w-[80px] lg:w-auto"
              />
            </div>
            <div>
              <img
                src={AboutImage3}
                alt="Men and women worshipping Jesus"
                className="w-[80px] lg:w-auto"
              />
            </div>
            <div className="mt-10 lg:mt-24">
              <img
                src={AboutImage4}
                alt="Men and women worshipping Jesus"
                className="w-[80px] lg:w-auto"
              />
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
        <NewsletterCTA />
        <Footer />
      </div>
    </Fragment>
  );
};

export default AboutUs;

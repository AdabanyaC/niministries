import React, { Fragment } from "react";
import About from "../components/About";
import Events from "../components/Events";
import GetEdified from "../components/GetEdified";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PartnershipCTA from "../components/PartnershipCTA";
import Testimonials from "../components/Testimonials";
import AboutHero from "./../assets/hero/heroBg1.svg";

const Home = () => {
  return (
    <Fragment>
      <div>
        <div className="bg-[#F4FBFF] h-screen px-28 py-12">
          <Navbar />
          <Hero />
        </div>
        <div className="mt-32 px-28 py-12">
          <Events />
        </div>
      </div>
      <div
        className="mt-32 p-28"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 100, 0.3), rgba(0, 0, 0, 0.3)), url(${AboutHero})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex gap-10">
          <About
            title={"Our Vision"}
            description="We envision men in their multitude saved, trained and sent out for the work of the ministry."
          />
          <About
            title={"The Mission"}
            description={
              <ol>
                <li className="mt-3">
                  1. To have men come to the saving knowledge of Christ Jesus by
                  the preaching of the gospel.
                </li>
                <li className="mt-3">
                  2. To have men trained for the work of ministry by consistent
                  and sound teaching of the word.
                </li>
                <li className="mt-3">
                  3. To record men sent out to duplicate the former in the lives
                  of others.
                </li>
              </ol>
            }
          />
        </div>
      </div>
      <div className="mt-32 px-28 py-12">
        <Testimonials />
      </div>
      <div className="mt-32 px-28 py-12">
        <GetEdified />
      </div>
      <div className="mt-32">
        <PartnershipCTA />
      </div>
    </Fragment>
  );
};

export default Home;

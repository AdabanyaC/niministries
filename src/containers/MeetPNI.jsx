import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MeetPNIImage from "./../assets/hero/meetPNI.svg";
import FacebookIcon from "./../assets/icons/facebook.svg";
import InstagramIcon from "./../assets/icons/instagram.svg";
import TwitterIcon from "./../assets/icons/twitter.svg";

const MeetPNI = () => {
  return (
    <Fragment>
      <div className="">
        <div
          className="px-28 py-12 h-screen w-full"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 100, 0.3), rgba(0, 0, 0, 0.3)), url(${MeetPNIImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          }}
        >
          <Navbar />
          <div className="flex flex-col justify-center items-center w-full h-4/5">
            <h1 className="text-white font-bold text-5xl">
              Pastor Nelson Iheagwam
            </h1>
            <div className="flex justify-center gap-4 mt-10">
              <img src={FacebookIcon} alt="Facebook Icon" />
              <img src={InstagramIcon} alt="Instagram Icon" />
              <img src={TwitterIcon} alt="Twitter Icon" />
            </div>
          </div>
        </div>

        <div className="mt-20 px-28 py-12">
          <h1 className="font-bold text-5xl text-blue text-center">
            About Pastor Nelson
          </h1>
          <hr className="mt-5 w-96 text-center m-auto border bg-[#2D295C]" />
          <p className="mt-5 text-justify">
            Pastor Nelson Iheagwam is a believer passionate about men coming to
            the truth of salvation, growing in the same and walking in the
            fullness of the plans and purposes of God for them. He is passionate
            about Apologetics, the things of the spirit, accurate teaching of
            God’s word and fervour seen in the heart and acts of the believer.
            <br />
            <br />
            With meetings under his belt, it is a testimony of his ministry that
            many have been undoubtedly touched by the power of the Spirit and
            fervour ignited in the heart of much more He serves as the Lead of
            Nelson Iheagwam Ministries, which is an interdenominational ministry
            expression where he lives out his ultimate vision to see men in
            their multitude be saved, trained and sent to duplicate the same in
            the lives of others.
          </p>
          <div className="mt-10 text-center">
            <button className="bg-blue text-white px-10 py-4 rounded-2xl text-sm w-52">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </Fragment>
  );
};

export default MeetPNI;

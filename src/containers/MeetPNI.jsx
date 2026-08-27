import React, { Fragment, useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ErrorMessage, LoadingSpinner } from "../components/AsyncState";
import MeetPNIImage from "./../assets/hero/meetPNI.svg";
import FacebookIcon from "./../assets/icons/facebook.svg";
import InstagramIcon from "./../assets/icons/instagram.svg";
import TwitterIcon from "./../assets/icons/twitter.svg";
import { NavLink } from "react-router-dom";
import { fetchLeadProfile } from "../services/contentApi";

const MeetPNI = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const loadLeadProfile = async () => {
      setLoading(true);
      setError("");

      try {
        const profile = await fetchLeadProfile();
        if (active) setData(profile);
      } catch (err) {
        if (active) setError(err.message);
      } finally {
        if (active) setLoading(false);
      }
    };

    loadLeadProfile();

    return () => {
      active = false;
    };
  }, []);

  return (
    <Fragment>
      <div className="">
        <div
          className="p-4 lg:px-28 lg:py-12 h-screen w-full"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 100, 0.3), rgba(0, 0, 0, 0.3)), url(${MeetPNIImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          }}
        >
          <Navbar />
          <div className="flex flex-col justify-center items-center w-full h-full">
            <h1 className="text-white font-bold text-center text-5xl">
              Pastor Nelson Iheagwam
            </h1>
            <div className="flex justify-center gap-4 mt-10">
              <a href={data.facebook_url} target="_blank" rel="noreferrer">
                <img src={FacebookIcon} alt="Facebook Icon" />
              </a>
              <a href={data.instagram_url} target="_blank" rel="noreferrer">
                <img src={InstagramIcon} alt="Instagram Icon" />
              </a>
              <a href={data.twitter_url} target="_blank" rel="noreferrer">
                <img src={TwitterIcon} alt="Twitter Icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 p-4 lg:px-28 lg:py-12">
          <h1 className="font-bold text-4xl lg:text-5xl text-blue text-center">
            About Pastor Nelson
          </h1>
          <hr className="mt-5 w-72 lg:w-96 text-center m-auto border bg-[#2D295C]" />
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <p className="mt-5 text-justify">{data.caption}</p>
          )}
          <div className="mt-10 text-center">
            <NavLink to="/contact-us">
              <button className="bg-blue text-white px-10 py-4 rounded-2xl text-sm w-52">
                Book Now
              </button>
            </NavLink>
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

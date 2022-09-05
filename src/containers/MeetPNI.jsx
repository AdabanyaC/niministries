import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MeetPNIImage from "./../assets/hero/meetPNI.svg";
import FacebookIcon from "./../assets/icons/facebook.svg";
import InstagramIcon from "./../assets/icons/instagram.svg";
import TwitterIcon from "./../assets/icons/twitter.svg";

const MeetPNI = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const getAboutTheLead = async () => {
    setLoading(true);

    try {
      const aboutTheLeadData = await axios.get(
        "https://nim-backend.herokuapp.com/api/about-the-lead"
      );

      setData(aboutTheLeadData.data.data.attributes);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAboutTheLead();
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
            <h1 className="text-white font-bold text-5xl">
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
          <h1 className="font-bold text-5xl text-blue text-center">
            About Pastor Nelson
          </h1>
          <hr className="mt-5 w-96 text-center m-auto border bg-[#2D295C]" />
          <p className="mt-5 text-justify">
            {loading && (
              <div role="status" className="flex justify-center mt-10">
                <svg
                  aria-hidden="true"
                  className="w-12 h-12 text-gray-200 animate-spin fill-blue"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            )}
            {data && data.caption}
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

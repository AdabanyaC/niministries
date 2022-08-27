import React, { Fragment } from "react";
import LatestSermonCard from "../components/LatestSermonCard";
import Navbar from "../components/Navbar";
import PartnershipCTA from "../components/PartnershipCTA";
import Poster1 from "./../assets/posters/april.svg";
import Poster2 from "./../assets/posters/march.svg";
import Poster3 from "./../assets/posters/february.svg";
import AnchorIcon from "./../assets/social/anchor.svg";
import AppleIcon from "./../assets/social/apple.svg";
import GoogleIcon from "./../assets/social/google.svg";
import YoutubeAltIcon from "./../assets/social/youtube2.svg";
import SpotifyIcon from "./../assets/social/spotify.svg";
import DownloadIcon from "./../assets/icons/download.svg";
import ExportIcon from "./../assets/icons/export.svg";
import Card from "../components/Card";

const Resources = () => {
  return (
    <Fragment>
      <div className="">
        <div className="bg-[#F4FBFF] h-fit px-28 py-12">
          <Navbar />
          <h1 className="text-5xl text-blue text-center font-bold mt-16">
            Get Edified
          </h1>
          <p className="text-center mt-5 w-[725px] m-auto">
            Enjoy access to our uplifting resources to aid your growth, stir you
            in the things of God and build a Christ centered consciousness.
          </p>

          <div>
            <LatestSermonCard />
          </div>
        </div>

        {/* Search Form in Resources Page */}
        <div className="px-28 pt-12">
          <form className="flex items-center">
            <label for="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full"
                placeholder="Search messages here"
                required
              />
            </div>
          </form>
        </div>
        <div className="flex justify-between flex-wrap px-28">
          <Card
            url={Poster1}
            title="Let's Talk Bible"
            description="Happy New Month Beloved. Special countdown to SOTOS Lagos Edition which doubles as our Supernatural Class for the month of June ...."
            footer={
              <div className="flex justify-between">
                <div className="flex">
                  <img src={AnchorIcon} alt="Anchor Icon" />
                  <img src={AppleIcon} alt="Apple Icon" />
                  <img src={GoogleIcon} alt="Google Icon" />
                  <img src={YoutubeAltIcon} alt="Youtube Icon" />
                  <img src={SpotifyIcon} alt="Spotify Icon" />
                </div>
                <div className="flex gap-2">
                  <img src={DownloadIcon} alt="Download Icon" className="w-6" />
                  <img src={ExportIcon} alt="Export Icon" className="w-6" />
                </div>
              </div>
            }
          />
          <Card
            url={Poster2}
            title="Impartations"
            description="Happy New Month Beloved. Special countdown to SOTOS Lagos Edition which doubles as our Supernatural Class for the month of June ...."
            footer={
              <div className="flex justify-between">
                <div className="flex">
                  <img src={AnchorIcon} alt="Anchor Icon" />
                  <img src={AppleIcon} alt="Apple Icon" />
                  <img src={GoogleIcon} alt="Google Icon" />
                  <img src={YoutubeAltIcon} alt="Youtube Icon" />
                  <img src={SpotifyIcon} alt="Spotify Icon" />
                </div>
                <div className="flex gap-2">
                  <img src={DownloadIcon} alt="Download Icon" className="w-6" />
                  <img src={ExportIcon} alt="Export Icon" className="w-6" />
                </div>
              </div>
            }
          />
          <Card
            url={Poster3}
            title="Regulated"
            description="Happy New Month Beloved. Special countdown to SOTOS Lagos Edition which doubles as our Supernatural Class for the month of June ...."
            footer={
              <div className="flex justify-between">
                <div className="flex">
                  <img src={AnchorIcon} alt="Anchor Icon" />
                  <img src={AppleIcon} alt="Apple Icon" />
                  <img src={GoogleIcon} alt="Google Icon" />
                  <img src={YoutubeAltIcon} alt="Youtube Icon" />
                  <img src={SpotifyIcon} alt="Spotify Icon" />
                </div>
                <div className="flex gap-2">
                  <img src={DownloadIcon} alt="Download Icon" className="w-6" />
                  <img src={ExportIcon} alt="Export Icon" className="w-6" />
                </div>
              </div>
            }
          />
          <Card
            url={Poster1}
            title="Let's Talk Bible"
            description="Happy New Month Beloved. Special countdown to SOTOS Lagos Edition which doubles as our Supernatural Class for the month of June ...."
            footer={
              <div className="flex justify-between">
                <div className="flex">
                  <img src={AnchorIcon} alt="Anchor Icon" />
                  <img src={AppleIcon} alt="Apple Icon" />
                  <img src={GoogleIcon} alt="Google Icon" />
                  <img src={YoutubeAltIcon} alt="Youtube Icon" />
                  <img src={SpotifyIcon} alt="Spotify Icon" />
                </div>
                <div className="flex gap-2">
                  <img src={DownloadIcon} alt="Download Icon" className="w-6" />
                  <img src={ExportIcon} alt="Export Icon" className="w-6" />
                </div>
              </div>
            }
          />
          <Card
            url={Poster2}
            title="Impartations"
            description="Happy New Month Beloved. Special countdown to SOTOS Lagos Edition which doubles as our Supernatural Class for the month of June ...."
            footer={
              <div className="flex justify-between">
                <div className="flex">
                  <img src={AnchorIcon} alt="Anchor Icon" />
                  <img src={AppleIcon} alt="Apple Icon" />
                  <img src={GoogleIcon} alt="Google Icon" />
                  <img src={YoutubeAltIcon} alt="Youtube Icon" />
                  <img src={SpotifyIcon} alt="Spotify Icon" />
                </div>
                <div className="flex gap-2">
                  <img src={DownloadIcon} alt="Download Icon" className="w-6" />
                  <img src={ExportIcon} alt="Export Icon" className="w-6" />
                </div>
              </div>
            }
          />
          <Card
            url={Poster3}
            title="Regulated"
            description="Happy New Month Beloved. Special countdown to SOTOS Lagos Edition which doubles as our Supernatural Class for the month of June ...."
            footer={
              <div className="flex justify-between">
                <div className="flex">
                  <img src={AnchorIcon} alt="Anchor Icon" />
                  <img src={AppleIcon} alt="Apple Icon" />
                  <img src={GoogleIcon} alt="Google Icon" />
                  <img src={YoutubeAltIcon} alt="Youtube Icon" />
                  <img src={SpotifyIcon} alt="Spotify Icon" />
                </div>
                <div className="flex gap-2">
                  <img src={DownloadIcon} alt="Download Icon" className="w-6" />
                  <img src={ExportIcon} alt="Export Icon" className="w-6" />
                </div>
              </div>
            }
          />
          <Card
            url={Poster1}
            title="Let's Talk Bible"
            description="Happy New Month Beloved. Special countdown to SOTOS Lagos Edition which doubles as our Supernatural Class for the month of June ...."
            footer={
              <div className="flex justify-between">
                <div className="flex">
                  <img src={AnchorIcon} alt="Anchor Icon" />
                  <img src={AppleIcon} alt="Apple Icon" />
                  <img src={GoogleIcon} alt="Google Icon" />
                  <img src={YoutubeAltIcon} alt="Youtube Icon" />
                  <img src={SpotifyIcon} alt="Spotify Icon" />
                </div>
                <div className="flex gap-2">
                  <img src={DownloadIcon} alt="Download Icon" className="w-6" />
                  <img src={ExportIcon} alt="Export Icon" className="w-6" />
                </div>
              </div>
            }
          />
          <Card
            url={Poster2}
            title="Impartations"
            description="Happy New Month Beloved. Special countdown to SOTOS Lagos Edition which doubles as our Supernatural Class for the month of June ...."
            footer={
              <div className="flex justify-between">
                <div className="flex">
                  <img src={AnchorIcon} alt="Anchor Icon" />
                  <img src={AppleIcon} alt="Apple Icon" />
                  <img src={GoogleIcon} alt="Google Icon" />
                  <img src={YoutubeAltIcon} alt="Youtube Icon" />
                  <img src={SpotifyIcon} alt="Spotify Icon" />
                </div>
                <div className="flex gap-2">
                  <img src={DownloadIcon} alt="Download Icon" className="w-6" />
                  <img src={ExportIcon} alt="Export Icon" className="w-6" />
                </div>
              </div>
            }
          />
          <Card
            url={Poster3}
            title="Regulated"
            description="Happy New Month Beloved. Special countdown to SOTOS Lagos Edition which doubles as our Supernatural Class for the month of June ...."
            footer={
              <div className="flex justify-between">
                <div className="flex">
                  <img src={AnchorIcon} alt="Anchor Icon" />
                  <img src={AppleIcon} alt="Apple Icon" />
                  <img src={GoogleIcon} alt="Google Icon" />
                  <img src={YoutubeAltIcon} alt="Youtube Icon" />
                  <img src={SpotifyIcon} alt="Spotify Icon" />
                </div>
                <div className="flex gap-2">
                  <img src={DownloadIcon} alt="Download Icon" className="w-6" />
                  <img src={ExportIcon} alt="Export Icon" className="w-6" />
                </div>
              </div>
            }
          />
        </div>
        <div className="mt-32">
          <PartnershipCTA />
        </div>
      </div>
    </Fragment>
  );
};

export default Resources;

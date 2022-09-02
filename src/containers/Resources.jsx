import React, { Fragment } from "react";
import LatestSermonCard from "../components/LatestSermonCard";
import SearchInput from "../components/SearchInput";
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
import NewsletterCTA from "../components/NewsletterCTA";
import Footer from "../components/Footer";

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
          <SearchInput />
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
        <NewsletterCTA />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Resources;

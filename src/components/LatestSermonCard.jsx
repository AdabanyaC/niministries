import React from "react";
import Poster1 from "./../assets/posters/march.svg";
import AnchorIcon from "./../assets/social/anchor.svg";
import AppleIcon from "./../assets/social/apple.svg";
import GoogleIcon from "./../assets/social/google.svg";
import YoutubeAltIcon from "./../assets/social/youtube2.svg";
import SpotifyIcon from "./../assets/social/spotify.svg";
import DownloadIcon from "./../assets/icons/download.svg";
import ExportIcon from "./../assets/icons/export.svg";
import ChevronDownIcon from "./../assets/icons/chevronDown.svg";

const LatestSermonCard = () => {
  return (
    <div className="bg-white px-12 py-8 flex justify-between rounded-3xl w-10/12 m-auto mt-16">
      <div className="w-1/2">
        <p className="text-xs">Dec 7, 2021 • Latest</p>
        <h3 className="font-bold text-2xl mt-4">Maximizing Impartations</h3>
        <p className="text-justify mt-4">
          Today, Survey54 makes it possible for businesses to build data-driven,
          personalized, and innovative financial services for their customers.
          In this piece, we share how this actually works with Survey54, how
          everyday users benefit from this innovation, and how we ensure their
          privacy and security of their data. Today, Survey54 makes it possible
          for businesses to build data-driven, personalized ...
        </p>
        <div className="flex gap-2 mt-4">
          <p className="text-blue italic text-sm">
            Join us physically or via these channels
          </p>
          <img src={ChevronDownIcon} alt="Chevron Down Icon" />
        </div>
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
      </div>
      <div className="">
        <img src={Poster1} alt="Latest Sermon Poster" className="" />
      </div>
    </div>
  );
};

export default LatestSermonCard;

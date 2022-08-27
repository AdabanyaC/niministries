import React from "react";
import CaptionAlt from "./CaptionAlt";
import Card from "./Card";
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

const GetEdified = () => {
  return (
    <div className="">
      <CaptionAlt
        headerText={"Get Edified"}
        description="Stay up to date with our latest sermons and get blessed"
      />
      <div className="flex justify-between mt-10 mb-24">
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
    </div>
  );
};

export default GetEdified;

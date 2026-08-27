import React, { Fragment, useState, useEffect } from "react";
import AnchorIcon from "./../assets/social/anchor.svg";
import AppleIcon from "./../assets/social/apple.svg";
import GoogleIcon from "./../assets/social/google.svg";
import YoutubeAltIcon from "./../assets/social/youtube2.svg";
import SpotifyIcon from "./../assets/social/spotify.svg";
import ChevronDownIcon from "./../assets/icons/chevronDown.svg";
import { ErrorMessage, LoadingSpinner } from "./AsyncState";
import { fetchSermons } from "../services/contentApi";

const LatestSermonCard = () => {
  const [loading, setLoading] = useState(false);
  const [sermons, setSermons] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const loadSermon = async () => {
      setLoading(true);
      setError("");

      try {
        const sermonItems = await fetchSermons({ pageSize: 1 });
        if (active) setSermons(sermonItems);
      } catch (err) {
        if (active) setError(err.message);
      } finally {
        if (active) setLoading(false);
      }
    };

    loadSermon();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="bg-white p-6 lg:px-12 lg:py-8 mt-16 flex justify-between flex-col-reverse lg:flex-row rounded-3xl w-full lg:w-10/12 m-auto">
      {loading ? (
        <LoadingSpinner className="" />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : sermons.length === 0 ? (
        <p>No sermons are available right now.</p>
      ) : (
        sermons.map((sermon) => {
          let {
            anchor_link,
            applepodcast_link,
            caption,
            googlepodcast_link,
            image_url,
            spotify_link,
            title,
            youtube_link,
          } = sermon;
          return (
            <Fragment key={sermon.id || title}>
              <div className="w-full lg:w-1/2 mt-5">
                <p className="text-xs font-semibold">Latest Sermon</p>
                <h3 className="font-bold text-2xl mt-4">{title}</h3>
                <p className="text-justify mt-4">{caption}</p>
                <div className="flex gap-2 mt-8">
                  <p className="text-blue italic text-sm">
                    Listen or watch via these channels below
                  </p>
                  <img src={ChevronDownIcon} alt="Chevron Down Icon" />
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-[-4px]">
                    <a href={anchor_link} target="_blank" rel="noreferrer">
                      <img src={AnchorIcon} alt="Anchor Icon" />
                    </a>
                    <a
                      href={applepodcast_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={AppleIcon} alt="Apple Icon" />
                    </a>
                    <a
                      href={googlepodcast_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={GoogleIcon} alt="Google Icon" />
                    </a>
                    <a href={youtube_link} target="_blank" rel="noreferrer">
                      <img src={YoutubeAltIcon} alt="Youtube Icon" />
                    </a>
                    <a href={spotify_link} target="_blank" rel="noreferrer">
                      <img src={SpotifyIcon} alt="Spotify Icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="">
                <img
                  src={image_url}
                  alt="Latest Sermon Poster"
                  className="h-[350px] w-[420px] rounded-2xl"
                />
              </div>
            </Fragment>
          );
        })
      )}
    </div>
  );
};

export default LatestSermonCard;

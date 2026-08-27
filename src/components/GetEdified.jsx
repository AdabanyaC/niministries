import React, { useState, useEffect } from "react";
import CaptionAlt from "./CaptionAlt";
import Card from "./Card";
import { ErrorMessage, LoadingSpinner } from "./AsyncState";
import AnchorIcon from "./../assets/social/anchor.svg";
import AppleIcon from "./../assets/social/apple.svg";
import GoogleIcon from "./../assets/social/google.svg";
import YoutubeAltIcon from "./../assets/social/youtube2.svg";
import SpotifyIcon from "./../assets/social/spotify.svg";
import { PrimaryButton } from "./Buttons";
import { fetchSermons } from "../services/contentApi";

const GetEdified = () => {
  const [loading, setLoading] = useState(false);
  const [sermons, setSermons] = useState([]);
  const [error, setError] = useState("");
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    let active = true;

    const loadSermons = async () => {
      setLoading(true);
      setError("");

      try {
        const sermonItems = await fetchSermons({ pageSize: 3 });
        if (active) setSermons(sermonItems);
      } catch (err) {
        if (active) setError(err.message);
      } finally {
        if (active) setLoading(false);
      }
    };

    loadSermons();

    return () => {
      active = false;
    };
  }, []);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="">
      <CaptionAlt
        headerText={"Get Edified"}
        description="Stay up to date with our latest sermons and get blessed"
      />
      <div className="flex justify-between flex-col lg:flex-row mt-10 lg:mb-24">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : sermons.length === 0 ? (
          <p className="mt-10">No sermons are available right now.</p>
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
              <Card
                key={sermon.id || title}
                url={image_url}
                title={title}
                description={readMore ? caption : caption?.slice(0, 150)}
                toggleReadMore={readMore ? `Read Less` : `Read More`}
                handleReadMore={handleReadMore}
                footer={
                  <div className="flex justify-between">
                    <div className="flex">
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
                }
              />
            );
          })
        )}
      </div>
      <div className="flex justify-end lg:mt-0 lg:hidden mt-10">
        <PrimaryButton btnText={"View All"} href="resources" />
      </div>
    </div>
  );
};

export default GetEdified;

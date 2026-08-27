import React, { Fragment, useState, useEffect } from "react";
import LatestSermonCard from "../components/LatestSermonCard";
import SearchInput from "../components/SearchInput";
import { ErrorMessage, LoadingSpinner } from "../components/AsyncState";
import Navbar from "../components/Navbar";
import PartnershipCTA from "../components/PartnershipCTA";
import AnchorIcon from "./../assets/social/anchor.svg";
import AppleIcon from "./../assets/social/apple.svg";
import GoogleIcon from "./../assets/social/google.svg";
import YoutubeAltIcon from "./../assets/social/youtube2.svg";
import SpotifyIcon from "./../assets/social/spotify.svg";
import Card from "../components/Card";
import NewsletterCTA from "../components/NewsletterCTA";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import { fetchSermons } from "../services/contentApi";

const Resources = () => {
  const [loading, setLoading] = useState(false);
  const [sermons, setSermons] = useState([]);
  const [error, setError] = useState("");
  const [readMore, setReadMore] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const handlePage1 = () => {
    setPageNumber(1);
  };
  const handlePage2 = () => {
    setPageNumber(2);
  };
  const handlePage3 = () => {
    setPageNumber(3);
  };
  const handlePage4 = () => {
    setPageNumber(4);
  };
  const handlePage5 = () => {
    setPageNumber(5);
  };
  const handlePage6 = () => {
    setPageNumber(6);
  };
  const handlePage7 = () => {
    setPageNumber(7);
  };

  useEffect(() => {
    let active = true;

    const loadSermons = async () => {
      setLoading(true);
      setError("");

      try {
        const sermonItems = await fetchSermons({ page: pageNumber });
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
  }, [pageNumber]);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <Fragment>
      <div className="">
        <div className="bg-[#F4FBFF] h-fit p-4 lg:px-28 lg:py-12">
          <Navbar />
          <h1 className="text-5xl text-blue text-center font-bold mt-16">
            Get Edified
          </h1>
          <p className="text-center mt-5 w-full lg:w-[725px] m-auto">
            Enjoy access to our uplifting resources to aid your growth, stir you
            in the things of God and build a Christ centered consciousness.
          </p>

          <div>
            <LatestSermonCard />
          </div>
        </div>

        {/* Search Form in Resources Page */}
        <div className="px-4 lg:px-28 pt-12">
          <SearchInput />
        </div>
        <div className="flex justify-between flex-wrap px-4 lg:px-28">
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : sermons.length === 0 ? (
            <p className="mt-10">No sermons were found on this page.</p>
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
                  }
                />
              );
            })
          )}
        </div>
        <div className="mt-12 p-4">
          <Pagination
            pageNumber={pageNumber}
            handlePage1={handlePage1}
            handlePage2={handlePage2}
            handlePage3={handlePage3}
            handlePage4={handlePage4}
            handlePage5={handlePage5}
            handlePage6={handlePage6}
            handlePage7={handlePage7}
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

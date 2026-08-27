import React, { useState, useEffect } from "react";
import Caption from "./Caption";
import Card from "./Card";
import { ErrorMessage, LoadingSpinner } from "./AsyncState";
import ChevronDownIcon from "./../assets/icons/chevronDown.svg";
import YouTubeIcon from "./../assets/social/youtube.svg";
import MixlrIcon from "./../assets/social/mixlr.svg";
import { fetchEvents } from "../services/contentApi";

const Events = () => {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    let active = true;

    const loadEvents = async () => {
      setLoading(true);
      setError("");

      try {
        const eventItems = await fetchEvents();
        if (active) setEvents(eventItems);
      } catch (err) {
        if (active) setError(err.message);
      } finally {
        if (active) setLoading(false);
      }
    };

    loadEvents();

    return () => {
      active = false;
    };
  }, []);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="">
      <Caption
        headerText={"Happening Soon"}
        description="Stay up to date with information about upcoming events"
      />
      <div className="flex justify-between flex-col lg:flex-row lg:flex-wrap mt-10 mb-24">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : events.length === 0 ? (
          <p className="mt-10">There are no upcoming events right now.</p>
        ) : (
          events.map((event) => {
            let { image_url, mixlr_link, title, youtube_link, caption } =
              event;
            return (
              <Card
                key={event.id || title}
                url={image_url}
                title={title}
                description={readMore ? caption : caption?.slice(0, 150)}
                toggleReadMore={readMore ? `Read Less` : `Read More`}
                handleReadMore={handleReadMore}
                footer={
                  <div>
                    <div className="flex gap-4">
                      <p className="text-blue italic text-sm">
                        Join us physically or via these channels
                      </p>
                      <img src={ChevronDownIcon} alt="Chevron Down Icon" />
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                      <a href={youtube_link}>
                        <img src={YouTubeIcon} alt="YouTube Icon" />
                      </a>
                      <a href={mixlr_link}>
                        <img src={MixlrIcon} alt="Mixlr Icon" />
                      </a>
                    </div>
                  </div>
                }
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Events;

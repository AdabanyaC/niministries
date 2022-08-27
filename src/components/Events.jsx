import React from "react";
import Caption from "./Caption";
import Card from "./Card";
import Poster1 from "./../assets/posters/april.svg";
import Poster2 from "./../assets/posters/march.svg";
import Poster3 from "./../assets/posters/february.svg";
import ChevronDownIcon from "./../assets/icons/chevronDown.svg";
import YouTubeIcon from "./../assets/social/youtube.svg";
import MixlrIcon from "./../assets/social/mixlr.svg";

const Events = () => {
  return (
    <div className="">
      <Caption
        headerText={"Happening Soon"}
        description="Stay up to date with information about upcoming events"
      />
      <div className="flex justify-between mt-10 mb-24">
        <Card
          url={Poster1}
          title="Let's Talk Bible"
          description="Happy New Month Beloved. Special countdown to SOTOS Lagos Edition which doubles as our Supernatural Class for the month of June ...."
          footer={
            <div>
              <div className="flex gap-2">
                <p className="text-blue italic text-sm">
                  Join us physically or via these channels
                </p>
                <img src={ChevronDownIcon} alt="Chevron Down Icon" />
              </div>
              <div className="flex gap-2 items-center mt-2">
                <a href="https://youtube.com">
                  <img src={YouTubeIcon} alt="YouTube Icon" />
                </a>
                <a href="https://mixlr.com/nelsoniheagwam">
                  <img src={MixlrIcon} alt="Mixlr Icon" />
                </a>
              </div>
            </div>
          }
        />
        <Card
          url={Poster2}
          title="Impartations"
          description="Happy New Month Beloved. Special countdown to SOTOS Lagos Edition which doubles as our Supernatural Class for the month of June ...."
          footer={
            <div>
              <div className="flex gap-2">
                <p className="text-blue italic text-sm">
                  Join us physically or via these channels
                </p>
                <img src={ChevronDownIcon} alt="Chevron Down Icon" />
              </div>
              <div className="flex gap-2 items-center mt-2">
                <a href="https://youtube.com">
                  <img src={YouTubeIcon} alt="YouTube Icon" />
                </a>
                <a href="https://mixlr.com/nelsoniheagwam">
                  <img src={MixlrIcon} alt="Mixlr Icon" />
                </a>
              </div>
            </div>
          }
        />
        <Card
          url={Poster3}
          title="Regulated"
          description="Happy New Month Beloved. Special countdown to SOTOS Lagos Edition which doubles as our Supernatural Class for the month of June ...."
          footer={
            <div>
              <div className="flex gap-2">
                <p className="text-blue italic text-sm">
                  Join us physically or via these channels
                </p>
                <img src={ChevronDownIcon} alt="Chevron Down Icon" />
              </div>
              <div className="flex gap-2 items-center mt-2">
                <a
                  href="https://youtube.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={YouTubeIcon} alt="YouTube Icon" />
                </a>
                <a
                  href="https://mixlr.com/nelsoniheagwam"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={MixlrIcon} alt="Mixlr Icon" />
                </a>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Events;

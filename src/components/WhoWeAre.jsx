import React from "react";
import AboutImage from "./../assets/hero/abtImg5.svg";

const WhoWeAre = () => {
  return (
    <div className="flex justify-center flex-col-reverse lg:flex-row gap-20 mt-32 p-4 lg:px-28 lg:py-12">
      <div className="w-full lg:w-1/2 self-center">
        <h3 className="text-4xl text-blue font-bold">Who We Are</h3>
        <p className="text-justify mt-5">
          Nelson Iheagwam Ministries is a mandate with a vision to have men in
          their multitude saved, trained and have ministry duplicated in the
          lives of many. Our meetings are characterised by the accurate teaching
          of God’s word, an emphasis on a devotional culture, a befitting
          training regimen to the end that men have a believers culture
          engrained and strong demonstrations of the things of the spirit. It is
          a testimony of our ministry that you leave our meetings with a hunger
          to do more for the Lord and a fire burning within for the things God
          has called you to do.
        </p>
      </div>
      <div className="">
        <img
          src={AboutImage}
          alt="Woman praying with lifted hands"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default WhoWeAre;


import React from "react";
import AboutImage from "./../assets/hero/abtImg6.svg";

const AboutOurLead = () => {
  return (
    <div className="flex justify-center flex-col lg:flex-row gap-20 mt-32 p-4 lg:px-28 lg:py-12">
      <div className="">
        <img
          src={AboutImage}
          alt="PNI in the teaching gesture"
          className="w-full"
        />
      </div>
      <div className="w-full lg:w-1/2 self-center">
        <h3 className="text-4xl text-blue font-bold">Our Lead</h3>
        <p className="text-justify mt-5">
          Nelson Iheagwam is a believer passionate about men coming to the truth
          of salvation, growing in the same and walking in the fullness of the
          plans and purposes of God for them. He is passionate about
          Apologetics, the things of the spirit, accurate teaching of God’s word
          and fervor seen in the heart and acts of the believer. With meetings
          under his belt, it is a testimony of his ministry that many have been
          undoubtedly touched by the power of the Spirit and fervor ignited in
          the heart of much more. It is his ultimate vision that men in their
          multitude be saved, trained and sent to duplicate the former in the
          lives of others as has been in theirs.
        </p>
      </div>
    </div>
  );
};

export default AboutOurLead;

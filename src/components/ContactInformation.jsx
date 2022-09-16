import React from "react";
import RightArrow from "./../assets/icons/RightArrowContact.svg";
import ContactImage from "./../assets/hero/contactImg1.svg";

const ContactInformation = ({ toggleContact }) => {
  return (
    <div>
      <div className="mt-20">
        <h4 className="text-blue text-lg font-extrabold">
          How can we help you?
        </h4>
        <p>We respond within minutes!</p>
      </div>
      <div className="mt-10">
        <h4 className="text-blue text-lg font-extrabold">Book Pastor Nelson</h4>
        <p>Schedule a one-on-one call with one of our experts.</p>
      </div>
      <div className="flex gap-1 mt-10">
        <p className="font-semibold">{toggleContact}</p>
        <img src={RightArrow} alt="Right Arrow Icon" />
      </div>
      <div className="mt-12">
        <img src={ContactImage} alt="Lady praying fervently" />
      </div>
      <div className="mt-10">
        <p className="text-sm w-full lg:w-[430px]">
          See how modern marketers make great decisions with our fast, accurate
          and actionable data. You’re in great company.
        </p>
      </div>
      <div className="mt-4 lg:mt-10">
        <h5 className="font-medium italic">Pastor Nelson Iheagwam, Lead NIM</h5>
      </div>
    </div>
  );
};

export default ContactInformation;

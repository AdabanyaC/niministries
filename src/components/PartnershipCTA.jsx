import React from "react";
import AboutImage1 from "./../assets/hero/abtImg8.svg";
import AboutImage2 from "./../assets/hero/abtImg9.svg";
import AboutImage3 from "./../assets/hero/abtImg7.svg";
import AboutImage4 from "./../assets/hero/abtImg10.svg";

const PartnershipCTA = () => {
  return (
    <div className="bg-blue flex justify-center gap-20 mt-32 p-4 lg:px-28 lg:py-12">
      <div className="w-1/2 self-center">
        <h3 className="text-4xl font-bold text-white">Partner with us</h3>
        <p className="text-justify mt-5 text-white">
          NIM as a ministry is committed to seeing men saved, trained and sent
          to do ministry and this will entail having periodic meetings by which
          the word of God is taught, men pray and are trained to be given to
          prayer, men are equipped for the things of the spirit and ultimately a
          launching out of men whose hearts are burning for the Lord. We call
          for people who will partner with us, with any amount consistently as
          often as your commitment can carry it.
        </p>
        <div className="mt-10">
          <a href="https://bit.ly/NIMflutterwave">
            <button className="bg-white text-blue font-semibold px-10 py-4 rounded-2xl text-sm w-52">
              Give Now
            </button>
          </a>
        </div>
      </div>
      <div>
        <div className="flex">
          <div className="self-end">
            <img src={AboutImage1} alt="People Praying and Worshipping Jesus" />
          </div>
          <div>
            <img src={AboutImage2} alt="People Praying and Worshipping Jesus" />
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={AboutImage3} alt="People Praying and Worshipping Jesus" />
          </div>
          <div>
            <img src={AboutImage4} alt="People Praying and Worshipping Jesus" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipCTA;

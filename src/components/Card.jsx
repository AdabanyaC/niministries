import React from "react";

const Card = ({ title, description, footer, url }) => {
  return (
    <div className="bg-white p-6 w-[420px] myShadow rounded-2xl mt-8">
      <img
        src={url}
        alt="Supernatural Class Febuary"
        className="h-[350px] w-[420px] rounded-lg"
      />
      <h3 className="text-[28px] mt-4 font-bold"> {title} </h3>
      <p className="text-justify mt-4">{description}</p>
      <div className="mt-6">{footer}</div>
    </div>
  );
};

export default Card;

import React from "react";

const Card = ({
  title,
  description,
  footer,
  url,
  toggleReadMore,
  handleReadMore,
}) => {
  return (
    <div className="bg-white p-6 w-full lg:w-[420px] myShadow rounded-2xl mt-8">
      <img src={url} alt={title} className="h-[350px] w-[420px] rounded-2xl" />
      <h3 className="text-[24px] mt-4 font-bold"> {title} </h3>
      <p className="text-justify mt-4">
        {description}{" "}
        <span
          className="text-gray-500 italic font-semibold cursor-pointer"
          onClick={handleReadMore}
        >
          {toggleReadMore}
        </span>
      </p>
      <div className="mt-6">{footer}</div>
    </div>
  );
};

export default Card;

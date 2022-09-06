import React from "react";

const NewsletterCTA = () => {
  return (
    <div className="bg-[#F4FBFF] flex justify-between flex-col lg:flex-row px-4 py-12 lg:px-28 lg:py-20">
      <div className="lg:w-[444px]">
        <h3 className="text-blue text-4xl font-bold">
          Be part of our inner circle 📨
        </h3>
        <p className="mt-4">
          Get notifications about NIM events and announcements, and resources.
        </p>
      </div>
      <div className="lg:self-end flex flex-col lg:flex-row gap-4 lg:gap-8 w-full lg:w-1/2">
        <div className="mt-10 w-full">
          <label htmlFor="first_name" className="block mb-2 text-sm font-bold ">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-5"
            placeholder="kennedyadams@gmail.com"
            required
          />
        </div>
        <div className="lg:self-end">
          <button className="bg-blue text-white px-10 py-4 rounded-2xl text-sm w-full lg:w-48">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCTA;

import React from "react";

const About = ({ title, description }) => {
  return (
    <div className="px-12 py-16 myShadow rounded-3xl flex flex-col justify-center">
      <h3 className="text-white font-bold text-3xl">{title}</h3>
      <p className="mt-4 text-white">{description}</p>
    </div>
  );
};

export default About;

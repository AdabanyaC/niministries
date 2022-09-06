import React from "react";

const About = ({ title, description }) => {
  return (
    <div className="p-8 lg:px-12 lg:py-16 v-m-card rounded-3xl flex flex-col justify-center w-full">
      <h3 className="text-white font-bold text-xl lg:text-3xl">{title}</h3>
      <p className="mt-3.5 text-white text-justify text-sm lg:text-base">
        {description}
      </p>
    </div>
  );
};

export default About;

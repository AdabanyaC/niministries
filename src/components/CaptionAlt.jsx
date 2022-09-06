import React from "react";
import { PrimaryButton } from "./Buttons";

const CaptionAlt = ({ headerText, description }) => {
  return (
    <div className="flex justify-between flex-col lg:flex-row">
      <div>
        <h1 className="text-blue font-extrabold text-4xl"> {headerText} </h1>
        <p className="text-xl mt-2"> {description} </p>
      </div>
      <div className="lg:flex self-end lg:self-center gap-2 mt-10 lg:mt-0 hidden">
        <PrimaryButton btnText={"View All"} href="resources" />
      </div>
    </div>
  );
};

export default CaptionAlt;

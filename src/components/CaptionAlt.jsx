import React from "react";
import { PrimaryButton } from "./Buttons";

const CaptionAlt = ({ headerText, description }) => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-blue font-extrabold text-4xl"> {headerText} </h1>
        <p className="text-xl mt-2"> {description} </p>
      </div>
      <div className="flex self-center gap-2">
        <PrimaryButton btnText={"View All"} href="resources" />
      </div>
    </div>
  );
};

export default CaptionAlt;

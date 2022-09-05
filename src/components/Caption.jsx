import React from "react";
import { DefaultButton, PrimaryButton } from "./Buttons";

const Caption = ({ headerText, description, defaultBtn }) => {
  return (
    <div className="flex justify-between flex-col lg:flex-row">
      <div>
        <h1 className="text-blue font-extrabold text-4xl"> {headerText} </h1>
        <p className="text-xl mt-2"> {description} </p>
      </div>
      <div className="flex self-end lg:self-center gap-2 mt-10 lg:mt-0">
        {defaultBtn ? null : <DefaultButton />}
        <PrimaryButton btnText={"Next"} />
      </div>
    </div>
  );
};

export default Caption;

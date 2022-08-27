import React from "react";
import { DefaultButton, PrimaryButton } from "./Buttons";

const Caption = ({ headerText, description, defaultBtn }) => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-blue font-extrabold text-4xl"> {headerText} </h1>
        <p className="text-xl mt-2"> {description} </p>
      </div>
      <div className="flex self-center gap-2">
        {defaultBtn ? null : <DefaultButton />}
        <PrimaryButton btnText={"Next"} />
      </div>
    </div>
  );
};

export default Caption;

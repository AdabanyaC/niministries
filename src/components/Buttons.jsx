import { NavLink } from "react-router-dom";
import RightArrowIconAlt from "./../assets/icons/arrowRightAlt.svg";
import ChevronLeftIcon from "./../assets/icons/chevronLeft.svg";
import ChevronRightIcon from "./../assets/icons/chevronRight.svg";

export const PrimaryButton = ({ btnText, icon, href }) => {
  return (
    <NavLink to={`/${href}`}>
      <button className="bg-blue text-white px-10 py-4 rounded-2xl flex gap-2">
        {btnText}
        {icon ? (
          icon
        ) : (
          <img
            src={ChevronRightIcon}
            alt="Chevron Right Icon"
            className="self-center"
          />
        )}
      </button>
    </NavLink>
  );
};

export const DefaultButton = () => {
  return (
    <button className="bg-[#0606401F] text-white px-10 py-4 rounded-2xl flex gap-2">
      <img
        src={ChevronLeftIcon}
        alt="Left Arrow Icon"
        className="self-center"
      />
    </button>
  );
};

export const SecondaryButton = ({ btnText }) => {
  return (
    <button className="bg-white text-blackalt border border-[#DBE2FA] px-10 py-4 rounded-2xl flex gap-2">
      {btnText}
      <img
        src={RightArrowIconAlt}
        alt="Right Arrow Icon"
        className="self-center"
      />
    </button>
  );
};

export const DefaultBtnNoArrow = ({ btnText }) => {
  return (
    <button className="bg-blue text-white  px-10 py-4 rounded-full">
      {btnText}
    </button>
  );
};

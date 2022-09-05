import React, { Fragment } from "react";
import ContactForm from "../components/ContactForm";
import ContactInformation from "../components/ContactInformation";
import Navbar from "../components/Navbar";

const ContactUs = () => {
  return (
    <Fragment>
      <div className="">
        <div className="contact-container h-fit p-4 lg:px-28 lg:py-12">
          <Navbar />
          <div className="flex justify-between">
            <div className="">
              <ContactInformation />
            </div>
            <div className="self-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs;

import React, { Fragment, useState } from "react";
import BookPNI from "../components/BookPNI";
import ContactForm from "../components/ContactForm";
import ContactInformation from "../components/ContactInformation";
import Navbar from "../components/Navbar";

const ContactUs = () => {
  const [contact, setContact] = useState(true);
  const [book, setBook] = useState(false);

  const handleContact = () => {
    setContact(true);
    setBook(false);
  };

  const handleBook = () => {
    setContact(false);
    setBook(true);
  };

  return (
    <Fragment>
      <div className="">
        <div className="contact-container h-fit p-4 lg:px-28 lg:py-12">
          <Navbar />
          <div className="flex justify-between flex-col lg:flex-row">
            <div className="">
              <ContactInformation
                toggleContact={!contact ? `Book Now` : `Contact Us`}
              />
            </div>
            <div className="self-center">
              <div
                className={`bg-white shadow lg:shadow-none lg:bg-[#f4fbff] flex justify-center gap-16 rounded-full mt-10 mb-6 lg:mb-10 ${
                  book && `lg:mt-40`
                }`}
              >
                <p
                  className={`w-1/2 cursor-pointer  text-sm px-6 lg:px-12 py-2 ${
                    contact && `bg-blue text-white rounded-full`
                  }`}
                  onClick={handleContact}
                >
                  Contact Us
                </p>
                <p
                  className={`w-1/2 px-6 lg:px-12 py-2 text-sm cursor-pointer ${
                    book && `bg-blue text-white rounded-full`
                  }`}
                  onClick={handleBook}
                >
                  Book PNI
                </p>
              </div>
              {contact ? <ContactForm /> : <BookPNI />}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs;

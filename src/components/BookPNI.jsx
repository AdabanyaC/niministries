import React from "react";

const BookPNI = () => {
  return (
    <div>
      <div>
        <h3 className="text-blue font-bold text-2xl">
          Book Pastor Nelson Iheagwam
        </h3>
        <p className="mt-2">
          Would you like to invite Pastor Nelson Iheagwam
          <br />
          for your meeting? Kindly fill the form below
        </p>
      </div>
      <form>
        <div className="mt-10">
          <label htmlFor="first_name" class="block mb-2 text-sm font-bold ">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="Kennedy Adams"
            required
          />
        </div>
        <div className="mt-10">
          <label htmlFor="first_name" class="block mb-2 text-sm font-bold ">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="kennedyadams@gmail.com"
            required
          />
        </div>
        <div className="mt-10">
          <label htmlFor="church_name" class="block mb-2 text-sm font-bold ">
            Name of Church/Ministry
          </label>
          <input
            type="text"
            id="name"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="Nelson Iheagwam Ministries"
            required
          />
        </div>
        <div className="mt-10">
          <label htmlFor="proposed_date" class="block mb-2 text-sm font-bold ">
            Proposed Date
          </label>
          <input
            type="date"
            id="name"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            required
          />
        </div>
        <div className="mt-10">
          <label htmlFor="contact_info" class="block mb-2 text-sm font-bold ">
            Website of Host/Social Media Handle (indicate which)
          </label>
          <input
            type="text"
            id="name"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="Website: niministries.org"
            required
          />
        </div>
        <div className="mt-10">
          <label htmlFor="location" class="block mb-2 text-sm font-bold ">
            Location
          </label>
          <input
            type="text"
            id="name"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="Lagos, Nigeria."
            required
          />
        </div>
        <div className="mt-10">
          <label htmlFor="message" class="block mb-2 text-sm font-bold ">
            Your Message
          </label>
          <textarea
            name="message"
            cols="30"
            rows="5"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3 resize-none"
            placeholder="Please, let us know the details of the meeting/program"
          ></textarea>
        </div>
        <div className="mt-10">
          <button className="bg-blue text-white px-10 py-4 rounded-2xl text-sm w-full">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookPNI;

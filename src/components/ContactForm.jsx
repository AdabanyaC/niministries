import React from "react";

const ContactForm = () => {
  return (
    <div>
      <div>
        <h3 className="text-blue font-bold text-2xl">Contact Us</h3>
        <p>
          To contact us for prayers, enquiries or bookings, please;
          <br />
          Call: +234 902 316 6760 or fill the form below
        </p>
      </div>
      <form>
        <div className="mt-10">
          <label for="first_name" class="block mb-2 text-sm font-bold ">
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
          <label for="first_name" class="block mb-2 text-sm font-bold ">
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
          <label for="first_name" class="block mb-2 text-sm font-bold ">
            How can we help?
          </label>
          <textarea
            name="message"
            cols="30"
            rows="5"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3 resize-none"
            placeholder="Please, let us know how we can help you."
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

export default ContactForm;

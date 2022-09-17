import React, { useState } from "react";
import axios from "axios";
import MailSentImg from "./../assets/illustrations/mail.png";

const ContactForm = () => {
  const [senderName, setSenderName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mailResponse, setMailResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSenderNameChange = (e) => {
    setSenderName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    axios
      .post(`https://nim-mail-service.herokuapp.com/api/v1/email/contact-us`, {
        sender_name: senderName,
        email: email,
        message: message,
      })
      .then(function (response) {
        setMailResponse(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        setError(error);
        setLoading(false);
      });
  };

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
      {/* If Mail Sent Successfully, Show This and Hide the Form */}
      <div className={`${mailResponse.status ? `block` : `hidden`} mt-10`}>
        <img
          src={MailSentImg}
          alt="Mail Sent Successfully"
          className="h-44 w-44 flex justify-center"
        />
        <h4 className="font-bold text-xl text-blue mt-4 capitalize">{`${mailResponse.message} 🎉`}</h4>
        <p className="mt-2">
          Thank you for reaching out to us. We'll be in touch with you as soon
          as possible.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className={`${mailResponse.status ? `hidden` : `block`}`}
      >
        <div className="mt-10">
          <label htmlFor="first_name" class="block mb-2 text-sm font-bold ">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="Kennedy Adams"
            onChange={handleSenderNameChange}
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
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mt-10">
          <label htmlFor="first_name" class="block mb-2 text-sm font-bold ">
            How can we help?
          </label>
          <textarea
            name="message"
            cols="30"
            rows="5"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3 resize-none"
            placeholder="Please, let us know how we can help you."
            onChange={handleMessageChange}
          ></textarea>
        </div>
        <div className="mt-10">
          <button className="bg-blue text-white px-10 py-4 rounded-2xl text-sm w-full">
            {loading ? `Sending Message...` : `Send Message`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

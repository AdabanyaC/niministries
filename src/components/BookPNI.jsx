import React, { useState } from "react";
import axios from "axios";
import BookingConfirmedImg from "./../assets/illustrations/message.png";

const BookPNI = () => {
  const [senderName, setSenderName] = useState("");
  const [email, setEmail] = useState("");
  const [churchName, setChurchName] = useState("");
  const [proposedDate, setProposedDate] = useState("");
  const [websiteSocials, setWebsiteSocials] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [nameOfMeeting, setNameOfMeeting] = useState("");
  const [mailResponse, setMailResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    axios
      .post(`https://nim-mailing-service.onrender.com/api/v1/email/book-pni`, {
        sender_name: senderName,
        email: email,
        church_name: churchName,
        proposed_date: proposedDate,
        website_socials: websiteSocials,
        location: location,
        message: message,
        name_of_meeting: nameOfMeeting,
      })
      .then(function (response) {
        setMailResponse(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        setError(error);
        setLoading(false);
      });

    console.log("Loading", loading);
    console.log("Email Response", mailResponse);
    console.log("Error", error);
  };

  return (
    <div>
      <div>
        <h3 className="text-blue font-bold text-2xl">
          Book Pastor Nelson Iheagwam
        </h3>
        <p className="mt-2">
          Would you like to invite Pastor Nelson Iheagwam for your meeting?
          Kindly fill the form below
        </p>
      </div>
      {/* If Mail Sent Successfully, Show This and Hide the Form */}
      <div className={`${mailResponse.status ? `block` : `hidden`} mt-10`}>
        <img
          src={BookingConfirmedImg}
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
            onChange={(e) => setSenderName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setChurchName(e.target.value)}
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
            onChange={(e) => setProposedDate(e.target.value)}
            required
          />
        </div>
        <div className="mt-10">
          <label htmlFor="contact_info" class="block mb-2 text-sm font-bold ">
            Website of Host/Social Media Handle (indicate which)
          </label>
          <input
            type="url"
            id="name"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="Website URL or Links to social media profiles."
            onChange={(e) => setWebsiteSocials(e.target.value)}
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
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="mt-10">
          <label htmlFor="nameOfMeeting" class="block mb-2 text-sm font-bold ">
            Meeting Theme
          </label>
          <input
            type="text"
            id="name"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="Theme of Meeting"
            onChange={(e) => setNameOfMeeting(e.target.value)}
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
            placeholder="Please, let us know the details of the meeting."
            onChange={(e) => setMessage(e.target.value)}
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

export default BookPNI;

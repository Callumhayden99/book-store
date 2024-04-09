"use client";

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send form data to backend API
    console.log("Form submitted");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-red-600">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have a question, feedback, or inquiry? We'd love to hear from you!
            Fill out the form below or contact us directly using the information
            provided.
          </p>

          <div className="flex items-center mb-4 animate-fade-in">
            <FaEnvelope className="text-2xl text-red-600 mr-4" />
            <span className="text-gray-600">info@bookstore.com</span>
          </div>

          <div className="flex items-center mb-4 animate-fade-in">
            <FaPhone className="text-2xl text-red-600 mr-4" />
            <span className="text-gray-600">+1 123-456-7890</span>
          </div>

          <div className="flex items-center animate-fade-in">
            <FaMapMarkerAlt className="text-2xl text-red-600 mr-4" />
            <span className="text-gray-600">
              123 Book Street, City, Country
            </span>
          </div>
        </div>

        <div className="animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 font-bold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 font-bold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block mb-2 font-bold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
                rows="5"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-2 rounded-md hover:bg-red-700 transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

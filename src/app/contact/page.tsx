"use client";
import { useForm, ValidationError } from '@formspree/react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from 'next/navigation';

export default function Contact() {
  const [state, handleSubmit] = useForm("mvoevrkw");
  const router = useRouter();

  if (state.succeeded) {
    // Navigate to the home page after a successful form submission
    router.push('/home');
    return null;
  }

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
            Fill out the form below or contact us directly using the information provided.
          </p>
          <div className="flex items-center mb-4 animate-fade-in">
            <FaPhone className="text-2xl text-red-600 mr-4" />
            <span className="text-gray-600">+1 123-456-7890</span>
          </div>
          <div className="flex items-center animate-fade-in">
            <FaMapMarkerAlt className="text-2xl text-red-600 mr-4" />
            <span className="text-gray-600">
              123 Book Street, Sydney, Australia
            </span>
          </div>
        </div>
        <div className="animate-fade-in">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500" />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
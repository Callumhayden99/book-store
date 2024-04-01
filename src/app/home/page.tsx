/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  FaBook,
  FaShippingFast,
  FaHeadphones,
  FaRegCreditCard,
} from "react-icons/fa";
import ScrollReveal from "scrollreveal";
import Carousel from "../../components/Carousel";
import Carousel2 from "../../components/Carousel2";

const Home = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 800,
      delay: 200,
      easing: "ease-in-out",
    });

    sr.reveal(".section", { interval: 200 });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="section">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">
              Welcome to BookBank
            </h1>
            <p className="text-gray-600 mb-8">
              Discover a world of books at your fingertips.
            </p>
            <Link href="/books">
              <span className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300">
                Shop Now
              </span>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/hero.jpg"
              alt="Hero"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <section>
        <Carousel />
      </section>

      <section className="section">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 text-center">
            <FaBook className="text-3xl md:text-4xl text-red-600 mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-bold mb-4">Fiction</h3>
            <p className="text-gray-600">
              Explore captivating stories and immerse yourself in imaginative
              worlds.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 text-center">
            <FaBook className="text-3xl md:text-4xl text-red-600 mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-bold mb-4">Non-Fiction</h3>
            <p className="text-gray-600">
              Discover informative and inspiring books on various subjects.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 text-center">
            <FaBook className="text-3xl md:text-4xl text-red-600 mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-bold mb-4">
              Children's Books
            </h3>
            <p className="text-gray-600">
              Find delightful reads for young minds and nurture their love for
              books.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-8 text-center">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 text-center">
            <FaShippingFast className="text-3xl md:text-4xl text-red-600 mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-bold mb-4">Fast Shipping</h3>
            <p className="text-gray-600">
              Get your books delivered to your doorstep in no time.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 text-center">
            <FaHeadphones className="text-3xl md:text-4xl text-red-600 mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-bold mb-4">
              Excellent Customer Support
            </h3>
            <p className="text-gray-600">
              Our friendly team is always ready to assist you with any
              inquiries.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 text-center">
            <FaRegCreditCard className="text-3xl md:text-4xl text-red-600 mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-bold mb-4">
              Secure Payments
            </h3>
            <p className="text-gray-600">
              Shop with confidence using our secure payment gateways.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <Carousel2 />
      </section>

      <section className="section">
        <div className="bg-red-600 text-white rounded-lg shadow-md p-6 md:p-8 text-center mt-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-8">
            Stay updated with the latest books, offers, and exclusive deals.
          </p>
          <form className="flex flex-col md:flex-row justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-1/3 px-4 py-2 rounded-l-md focus:outline-none mb-4 md:mb-0"
            />
            <button
              type="submit"
              className="bg-white text-red-600 px-6 py-2 rounded-r-md hover:bg-red-100 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
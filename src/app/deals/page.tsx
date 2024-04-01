"use client";

import Carousel3 from "@/components/Carousel3";
import { useEffect, useRef } from "react";
import { FaBookOpen, FaTag, FaShoppingCart, FaGift, FaCreditCard, FaTruck } from "react-icons/fa";

export default function Deals() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="mb-16 bg-white py-16 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-red-600">Deals and Promotions</h1>
          <p className="text-gray-600 text-lg">
            Discover amazing deals and promotions on your favorite books. We offer a wide range of discounts and special offers to make your reading experience even more enjoyable.
          </p>
        </div>
      </section>

      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="mb-16 bg-red-600 py-16 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">Featured Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <FaBookOpen className="text-5xl text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Bestsellers Sale</h3>
              <p className="text-gray-600">Get up to 50% off on our bestselling books. From fiction to non-fiction, find your next favorite read at an unbeatable price.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <FaTag className="text-5xl text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Genre-Specific Discounts</h3>
              <p className="text-gray-600">Explore discounts tailored to your favorite genres. Whether you love mystery, romance, or science fiction, we have special offers just for you.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <FaGift className="text-5xl text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Gift Card Promotions</h3>
              <p className="text-gray-600">Buy gift cards for your loved ones and receive bonus credits. It's the perfect way to share your love for books with others.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Carousel3 />
      </section>

      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="mb-16 bg-white py-16 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Limited-Time Offers</h2>
          <div className="flex flex-col md:flex-row items-center mb-8">
            <FaShoppingCart className="text-5xl text-red-600 mr-8 mb-4 md:mb-0" />
            <p className="text-gray-600 text-lg">
              Don't miss out on our limited-time offers! From flash sales to holiday specials, keep an eye out for exclusive deals that are available for a short period.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <FaCreditCard className="text-5xl text-red-600 mr-8 mb-4 md:mb-0" />
            <p className="text-gray-600 text-lg">
              Take advantage of our special financing options. Enjoy interest-free installments on select book purchases, making it easier to grow your collection.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="mb-16 bg-red-600 py-16 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">Free Shipping</h2>
          <div className="flex flex-col md:flex-row items-center">
            <FaTruck className="text-5xl text-white mr-8 mb-4 md:mb-0" />
            <p className="text-white text-lg">
              Enjoy free shipping on all orders over $50. We deliver your books right to your doorstep, making it convenient for you to start reading as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionRefs.current[4] = el)}
        className="bg-white py-16 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Subscribe for Exclusive Deals</h2>
          <p className="text-gray-600 text-lg mb-8">
            Don't miss out on any of our amazing deals and promotions. Subscribe to our newsletter and be the first to know about exclusive offers, new releases, and special discounts.
          </p>
          <form className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-2/3 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-600 mb-4 md:mb-0"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-2 rounded-r-md font-bold hover:bg-red-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
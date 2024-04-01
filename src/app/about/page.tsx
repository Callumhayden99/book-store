"use client";

import { useEffect, useRef } from "react";
import { FaBook, FaDonate, FaHandshake, FaUsers, FaHeart, FaSmile } from "react-icons/fa";

export default function About() {
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
          <h1 className="text-4xl font-bold mb-4 text-red-600">About Us</h1>
          <p className="text-gray-600 text-lg">
            Welcome to BookBank, your ultimate destination for all things books! We are passionate about providing a wide range of books to readers of all ages and interests.
          </p>
        </div>
      </section>

      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="mb-16 bg-red-600 py-16 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">What We Do</h2>
          <div className="flex flex-col md:flex-row items-center mb-8">
            <FaBook className="text-5xl text-white mr-8 mb-4 md:mb-0" />
            <p className="text-white text-lg">
              At BookBank, we curate an extensive collection of books spanning various genres, from classic literature to contemporary bestsellers. Our goal is to make reading accessible and enjoyable for everyone.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <FaDonate className="text-5xl text-white mr-8 mb-4 md:mb-0" />
            <p className="text-white text-lg">
              We believe in the power of books to educate, inspire, and transform lives. That's why a portion of our profits goes towards supporting literacy programs and donating books to underprivileged communities.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="mb-16 bg-white py-16 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">How We Were Created</h2>
          <p className="text-gray-600 text-lg">
            BookBank was founded in 2010 by a group of book lovers who shared a vision of creating an online bookstore that not only sells books but also makes a positive impact on society. Over the years, we have grown into a trusted brand known for our quality service and commitment to promoting literacy.
          </p>
        </div>
      </section>

      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="mb-16 bg-red-600 py-16 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">Who We Donate To</h2>
          <ul className="list-disc list-inside text-lg text-white">
            <li className="mb-2">Local libraries and schools in need of books</li>
            <li className="mb-2">Literacy programs for underprivileged communities</li>
            <li>Book donation drives for children in low-income areas</li>
          </ul>
        </div>
      </section>

      <section
        ref={(el) => (sectionRefs.current[4] = el)}
        className="mb-16 bg-white py-16 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-600 rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300">
              <FaHandshake className="text-5xl text-white mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Excellent Customer Service</h3>
              <p className="text-white text-lg">
                Our dedicated team is committed to providing exceptional customer service. We are always ready to assist you with any inquiries or concerns you may have.
              </p>
            </div>
            <div className="bg-red-600 rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300">
              <FaHeart className="text-5xl text-white mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Support Charitable Causes</h3>
              <p className="text-white text-lg">
                By shopping at BookBank, you are not only treating yourself to great books but also contributing to making a difference in the lives of others through our charitable initiatives.
              </p>
            </div>
            <div className="bg-red-600 rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300">
              <FaSmile className="text-5xl text-white mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Satisfaction Guaranteed</h3>
              <p className="text-white text-lg">
                We take pride in offering a carefully curated selection of books and providing a seamless shopping experience. If you're not satisfied with your purchase, we'll make it right.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionRefs.current[5] = el)}
        className="mb-16 bg-red-600 py-16 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">Charity Work</h2>
          <p className="text-white text-lg mb-8">
            At BookBank, giving back to the community is at the core of what we do. We regularly organize book donation drives and partner with local organizations to promote literacy and education. If you would like to get involved or learn more about our charity work, please don't hesitate to reach out to us.
          </p>
          <a
            href="/contact"
            className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      <section
        ref={(el) => (sectionRefs.current[6] = el)}
        className="bg-white py-16 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Who Works for Us</h2>
          <div className="flex flex-col md:flex-row items-center mb-8">
            <FaUsers className="text-5xl text-red-600 mr-8 mb-4 md:mb-0" />
            <p className="text-gray-600 text-lg">
              Our team at BookBank is made up of passionate individuals who share a love for books and a commitment to making a positive impact. With diverse backgrounds and expertise, we work together to provide the best possible experience for our customers.
            </p>
          </div>
          <p className="text-gray-600 text-lg mb-4">Meet our core team members:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <li className="bg-red-600 rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-bold mb-2 text-white">John Doe</h4>
              <p className="text-white">Founder and CEO</p>
            </li>
            <li className="bg-red-600 rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-bold mb-2 text-white">Jane Smith</h4>
              <p className="text-white">Marketing Manager</p>
            </li>
            <li className="bg-red-600 rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-bold mb-2 text-white">Mike Johnson</h4>
              <p className="text-white">Customer Support Specialist</p>
            </li>
            <li className="bg-red-600 rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-bold mb-2 text-white">Sarah Lee</h4>
              <p className="text-white">Content Creator</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/DuneBook.jpeg",
    "/normalPeople.jpg",
    "/oxygenAdvantageBook.jpeg",
    "/warandpeaceBook.jpg",
    "/redSparrow.jpg",
    "/iAmPilgrim.jpg",
  ];

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
          <div key={index} className="w-1/4 flex-shrink-0 p-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={image}
                alt={`Book ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
        onClick={prevSlide}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
        onClick={nextSlide}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;

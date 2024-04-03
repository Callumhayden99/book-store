"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const categories = [
  { name: "Fiction", slug: "fiction" },
  { name: "Non-Fiction", slug: "non-fiction" },
  { name: "Mystery", slug: "mystery" },
  { name: "Science Fiction", slug: "science-fiction" },
  { name: "Classic", slug: "Classic" },
  { name: "Biography", slug: "biography" },
  { name: "Self-Help", slug: "self-help" },
  { name: "Business", slug: "business" },
];

const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button
            className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <FaBars className="h-6 w-6" />
          </button>
          <ul className="hidden md:flex md:justify-center md:space-x-8 md:mx-auto">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/category/${category.slug}`}>
                  <span
                    className={`cursor-pointer transition duration-300 ease-in-out ${
                      activeCategory === category.slug
                        ? "text-red-600 font-semibold"
                        : "text-gray-600 hover:text-red-600"
                    }`}
                    onMouseEnter={() => setActiveCategory(category.slug)}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    {category.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {isMobileMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/category/${category.slug}`}>
                  <span
                    className={`block px-4 py-2 text-gray-600 hover:text-red-600 ${
                      activeCategory === category.slug
                        ? "text-red-600 font-semibold"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveCategory(category.slug);
                      toggleMobileMenu();
                    }}
                  >
                    {category.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default CategoryNav;
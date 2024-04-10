"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaBook, FaFeatherAlt, FaSearch, FaRobot, FaLandmark, FaUserTie, FaHeart, FaBriefcase } from "react-icons/fa";

export default function CategoryNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center items-center">
          <nav className="hidden md:block">
            <ul className="flex flex-wrap justify-center space-x-4">
              <li>
                <Link href="/all">
                  <span className="flex items-center text-gray-800 hover:text-red-600">
                    <FaBook className="mr-1" /> All
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/fiction">
                  <span className="flex items-center text-gray-800 hover:text-red-600">
                    <FaFeatherAlt className="mr-1" /> Fiction
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/non-fiction">
                  <span className="flex items-center text-gray-800 hover:text-red-600">
                    <FaSearch className="mr-1" /> Non-fiction
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/mystery">
                  <span className="flex items-center text-gray-800 hover:text-red-600">
                    <FaSearch className="mr-1" /> Mystery
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/science-fiction">
                  <span className="flex items-center text-gray-800 hover:text-red-600">
                    <FaRobot className="mr-1" /> Science-Fiction
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/classic">
                  <span className="flex items-center text-gray-800 hover:text-red-600">
                    <FaLandmark className="mr-1" /> Classic
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/biography">
                  <span className="flex items-center text-gray-800 hover:text-red-600">
                    <FaUserTie className="mr-1" /> Biography
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/self-help">
                  <span className="flex items-center text-gray-800 hover:text-red-600">
                    <FaHeart className="mr-1" /> Self-Help
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/business">
                  <span className="flex items-center text-gray-800 hover:text-red-600">
                    <FaBriefcase className="mr-1" /> Business
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 hover:text-red-600 focus:outline-none"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="mt-4 md:hidden">
            <ul className="flex flex-col items-center space-y-2">
              <li>
                <Link href="/all">
                  <span className="flex items-center text-gray-800 hover:text-red-600">
                    <FaBook className="mr-1" /> All
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/fiction">
                  <span className="flex items-center text-gray-800 hover:text-red-600">
                    <FaFeatherAlt className="mr-1" /> Fiction
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/non-fiction">
                  <span className="flex items-center text-gray-800 hover:text-red-600">
                    <FaSearch className="mr-1" /> Non-fiction
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/mystery">
                  <span className="flex items-center text-gray-800 hover:text-red-600">
                    <FaSearch className="mr-1" /> Mystery
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/science-fiction">
                  <span className="flex items-center text-gray-800 hover:text-red-600">
                    <FaRobot className="mr-1" /> Science-Fiction
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/classic">
                  <span className="flex items-center text-gray-800 hover:text-red-600">
                    <FaLandmark className="mr-1" /> Classic
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/biography">
                  <span className="flex items-center text-gray-800 hover:text-red-600">
                    <FaUserTie className="mr-1" /> Biography
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/self-help">
                  <span className="flex items-center text-gray-800 hover:text-red-600">
                    <FaHeart className="mr-1" /> Self-Help
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/business">
                  <span className="flex items-center text-gray-800 hover:text-red-600">
                    <FaBriefcase className="mr-1" /> Business
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaHome,
  FaInfoCircle,
  FaTag,
  FaEnvelope,
} from "react-icons/fa";

export default function Header() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const adminEmail = localStorage.getItem("adminEmail");
    const adminRole = localStorage.getItem("adminRole");
    if (adminEmail && adminRole === "ADMIN") {
      setIsAdminLoggedIn(true);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("adminEmail");
    localStorage.removeItem("adminRole");
    setIsAdminLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex flex-wrap justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/home">
            <span className="text-3xl font-bold text-red-600">BookBank</span>
          </Link>
        </div>
        <div className="w-full md:w-auto mb-4 md:mb-0 md:mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search books..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:block">
            <ul className="flex flex-wrap justify-center space-x-4">
              <li>
                <Link href="/home">
                  <span className="text-gray-800 hover:text-red-600 flex items-center">
                    <FaHome className="mr-1" />
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-gray-800 hover:text-red-600 flex items-center">
                    <FaInfoCircle className="mr-1" />
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/deals">
                  <span className="text-gray-800 hover:text-red-600 flex items-center">
                    <FaTag className="mr-1" />
                    Deals
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-800 hover:text-red-600 flex items-center">
                    <FaEnvelope className="mr-1" />
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <span className="text-gray-800 hover:text-red-600 flex items-center">
                    <FaShoppingCart className="mr-1" />
                    Cart
                  </span>
                </Link>
              </li>
              {!isAdminLoggedIn && (
                <li>
                  <Link href="/login">
                    <span className="text-gray-800 hover:text-red-600 flex items-center">
                      <FaUser className="mr-1" />
                      Login
                    </span>
                  </Link>
                </li>
              )}
              {isAdminLoggedIn && (
                <li>
                  <button
                    onClick={handleSignOut}
                    className="text-gray-800 hover:text-red-600"
                  >
                    Sign Out
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
      <nav className="md:hidden mt-4">
        <ul className="flex flex-wrap justify-center space-x-4">
          <li>
            <Link href="/home">
              <span className="text-gray-800 hover:text-red-600 flex items-center">
                <FaHome className="mr-1" />
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="text-gray-800 hover:text-red-600 flex items-center">
                <FaInfoCircle className="mr-1" />
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/deals">
              <span className="text-gray-800 hover:text-red-600 flex items-center">
                <FaTag className="mr-1" />
                Deals
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="text-gray-800 hover:text-red-600 flex items-center">
                <FaEnvelope className="mr-1" />
                Contact
              </span>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <span className="text-gray-800 hover:text-red-600 flex items-center">
                <FaShoppingCart className="mr-1" />
                Cart
              </span>
            </Link>
          </li>
          {!isAdminLoggedIn && (
            <li>
              <Link href="/login">
                <span className="text-gray-800 hover:text-red-600 flex items-center">
                  <FaUser className="mr-1" />
                  Login
                </span>
              </Link>
            </li>
          )}
          {isAdminLoggedIn && (
            <li>
              <button
                onClick={handleSignOut}
                className="text-gray-800 hover:text-red-600"
              >
                Sign Out
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
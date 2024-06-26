import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-white shadow-md mt-8 border-t border-gray-300">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/">
                <span className="text-xl font-bold text-red-600">
                  BookStore
                </span>
              </Link>
            </div>
            <nav className="mb-4 md:mb-0">
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left">
                <li>
                  <Link href="/home">
                    <span className="text-gray-800 hover:text-red-600">
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="text-gray-800 hover:text-red-600">
                      About
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span className="text-gray-800 hover:text-red-600">
                      Contact
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/terms">
                    <span className="text-gray-800 hover:text-red-600">
                      Terms &amp; Conditions
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 justify-center md:justify-end">
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="text-gray-800 hover:text-red-600" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-gray-800 hover:text-red-600" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-gray-800 hover:text-red-600" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-red-600 py-2">
          <div className="container mx-auto px-4 text-center text-white">
            &copy; {new Date().getFullYear()} BookStore. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

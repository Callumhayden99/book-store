"use client";

import { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Registration successful, redirect to login page
        window.location.href = "/login";
      } else {
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-red-600">
          Register
        </h1>
        {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 font-bold text-gray-700"
            >
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 font-bold text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/login" className="text-red-600 hover:underline">
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
}

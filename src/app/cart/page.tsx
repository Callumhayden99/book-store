"use client";
import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";

const formatPrice = (price) => {
  return typeof price === "number" ? `$${price.toFixed(2)}` : "$0.00";
};

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("cartItems")) || []
        : [];
    setCartItems(storedCartItems);
  }, []);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.price) * item.quantity,
      0
    );
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-red-600">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center mb-8">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-32 object-cover rounded-md mr-6"
                    />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-2">Quantity: {item.quantity}</p>
                      <p className="text-gray-800 font-bold mb-2">
                        {formatPrice(parseFloat(item.price))}
                      </p>
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <FaTrash className="inline-block mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="text-gray-800 font-bold">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="text-gray-800 font-bold">Free</span>
                </div>
                <div className="flex justify-between mb-8">
                  <span className="text-gray-600">Total:</span>
                  <span className="text-red-600 font-bold text-2xl">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>
                <button className="bg-red-600 text-white px-8 py-3 rounded-md font-bold hover:bg-red-700 transition duration-300 w-full">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
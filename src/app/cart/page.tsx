"use client";

import { FaShoppingCart, FaTrash, FaCreditCard, FaPaypal, FaApplePay, FaAmazonPay } from "react-icons/fa";

export default function Cart() {
  const cartItems = [
    { id: 1, title: "Book 1", price: 19.99, quantity: 2 },
    { id: 2, title: "Book 2", price: 24.99, quantity: 1 },
    { id: 3, title: "Book 3", price: 14.99, quantity: 3 },
  ];

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
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
                    <img src={`/images/book${item.id}.jpg`} alt={item.title} className="w-24 h-32 object-cover rounded-md mr-6" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-2">Quantity: {item.quantity}</p>
                      <p className="text-gray-800 font-bold mb-2">${item.price.toFixed(2)}</p>
                      <button className="text-red-600 hover:text-red-800">
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
                  <span className="text-gray-800 font-bold">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="text-gray-800 font-bold">Free</span>
                </div>
                <div className="flex justify-between mb-8">
                  <span className="text-gray-600">Total:</span>
                  <span className="text-red-600 font-bold text-2xl">${getTotalPrice().toFixed(2)}</span>
                </div>
                <button className="bg-red-600 text-white px-8 py-3 rounded-md font-bold hover:bg-red-700 transition duration-300 w-full">
                  Proceed to Checkout
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md mt-8">
                <h2 className="text-2xl font-bold mb-6">Accepted Payment Methods</h2>
                <div className="flex justify-center space-x-8">
                  <FaCreditCard className="text-4xl text-gray-600" />
                  <FaPaypal className="text-4xl text-gray-600" />
                  <FaApplePay className="text-4xl text-gray-600" />
                  <FaAmazonPay className="text-4xl text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
"use client";
import Carousel3 from "@/components/Carousel3";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

interface Book {
  quantity: number;
  id: number;
  name: string;
  author: string;
  genre: string;
  price: number;
  numPages: number;
  weight: number;
  description: string;
  image: string;
  synopsis: string;
}

export default function BookDisplayPage({
  params,
}: {
  params: { id: string };
}) {
  const [book, setBook] = useState<Book | null>(null);
  const { id } = params;

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get<Book>(`/api/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBook();
  }, [id]);

  const handleAddToCart = () => {
    if (book) {
      const cartItem = {
        id: book.id,
        name: book.name,
        price: book.price,
        image: book.image,
        quantity: 1,
      };

      const storedCartItems =
        JSON.parse(localStorage.getItem("cartItems")) || [];
      const existingItemIndex = storedCartItems.findIndex(
        (item) => item.id === cartItem.id
      );

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, increase its quantity
        storedCartItems[existingItemIndex].quantity += 1;
      } else {
        // If the item doesn't exist in the cart, add it as a new item
        storedCartItems.push(cartItem);
      }

      localStorage.setItem("cartItems", JSON.stringify(storedCartItems));
      // Optionally, you can show a success message or update the cart UI
    }
  };

  if (!book) {
    return (
      <div className="text-xl text-gray-600 text-center py-8">Loading...</div>
    );
  }

  return (
    <div className="container mx-auto py-8 mt-5">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              src={book.image}
              alt={book.name}
              className="h-80 w-full object-cover md:w-80 lg:w-96"
            />
          </div>
          <div className="p-8 md:p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {book.name}
            </h2>
            <div className="flex flex-col md:flex-row items-center mb-6">
              <p className="text-gray-700 text-lg font-medium mb-2 md:mb-0 md:mr-4">
                <strong>Author:</strong> {book.author}
              </p>
              <span className="hidden md:block text-gray-500 mx-2">|</span>
              <p className="text-gray-700 text-lg font-medium">
                <strong>Genre:</strong> {book.genre}
              </p>
            </div>
            <p className="text-2xl text-gray-900 font-bold mb-6">
              Price: ${book.price}
            </p>
            <div className="flex flex-col md:flex-row items-center mb-8">
              <p className="text-gray-700 text-lg font-medium mb-2 md:mb-0 md:mr-4">
                <strong>Number of Pages:</strong> {book.numPages}
              </p>
              <span className="hidden md:block text-gray-500 mx-2">|</span>
              <p className="text-gray-700 text-lg font-medium">
                <strong>Weight:</strong> {book.weight} lbs
              </p>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              {book.description}
            </p>
            <button
              className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-3 px-6 rounded-lg flex items-center"
              onClick={handleAddToCart}
            >
              <FaShoppingCart className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <section className="mt-10 border-4 border-red-600 rounded-lg py-16 px-16 ">
        <h1 className="text-3xl font-bold text-center mb-8">SYNOPSIS</h1>
        <p className="text-center text-gray-700 text-lg leading-relaxed">{book.synopsis}</p>
      </section>
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Recommended Books
        </h2>
        <Carousel3 />
      </section>
    </div>
  );
}

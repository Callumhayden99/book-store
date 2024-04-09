"use client"
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
}

export default function BookDisplayPage({ params }: { params: { id: string } }) {
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

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="h-64 overflow-hidden">
          <img src={book.image} alt={book.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2 text-gray-800">{book.name}</h2>
          <p className="text-gray-600 mb-2">
            <strong>Author:</strong> {book.author}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Genre:</strong> {book.genre}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Price:</strong> ${book.price}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Number of Pages:</strong> {book.numPages}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Weight:</strong> {book.weight} lbs
          </p>
          <p className="text-gray-600">{book.description}</p>
        </div>
        <div className="mt-4 flex justify-center">
          <button className="bg-red-600 mb-5 font-bold rounded p-2 text-white hover:bg-black">
            <span className="text-gray-800 hover:text-red-600 flex items-center">
              <FaShoppingCart className="mr-1" /> Cart
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
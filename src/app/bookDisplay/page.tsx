"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface Book {
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

export default function BookDisplay() {
  const router = useRouter();
  const { bookId } = router.query;
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      console.log("Fetching book details...");
      try {const response = await axios.get<Book>(`http://localhost:3000/${bookId}`);
        setBook(response.data);
        console.log("Book details fetched:", response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    if (router.isReady && bookId) {
      console.log("Router is ready and bookId is available:", bookId);
      fetchBook();
    }
  }, [router.isReady, bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">{book.name}</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src={book.image} alt={book.name} className="w-full mb-4" />
          </div>
          <div className="md:w-1/2 md:pl-6">
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
        </div>
      </div>
    </div>
  );
}

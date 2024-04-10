"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaShoppingCart, FaInfoCircle } from "react-icons/fa";

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

export default function Fiction() {
  const [cartItems, setCartItems] = useState<Book[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get<Book[]>(
          "http://localhost:3000/api/fiction"
        );
        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();

    const storedCartItems =
      typeof window !== "undefined"
        ? JSON.parse(String(localStorage.getItem("cartItems"))) || []
        : [];
    setCartItems(storedCartItems);
  }, []);

  const handleAddToCart = (book: Book) => {
    const existingItem = cartItems.find((item) => item.id === book.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [...cartItems, { ...book, quantity: 1 }];
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Fiction Books
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={book.image}
                alt={book.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {book.name}
              </h2>
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
            <div className="mt-auto p-4 flex justify-center space-x-4">
              <button
                className="flex items-center bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none"
                onClick={() => handleAddToCart(book)}
              >
                <FaShoppingCart className="mr-2" />
                Add to Cart
              </button>
              <Link href={`/bookDisplay/${book.id}`}>
                <button className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none">
                  <FaInfoCircle className="mr-2" />
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
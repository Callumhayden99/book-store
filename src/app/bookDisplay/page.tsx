"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";

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

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get<Book>(`http://localhost:3000/api/books/${id}`);
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
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row max-w-6xl">
          <div className="md:w-1/3 mb-12 md:mb-0 md:mr-16">
            <Image
              src={book.image}
              alt={book.name}
              width={500}
              height={750}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-5xl font-bold mb-6">{book.name}</h1>
            <p className="text-2xl text-gray-600 mb-8">by {book.author}</p>
            <p className="text-2xl text-gray-600 mb-8">Genre: {book.genre}</p>
            <p className="text-2xl text-gray-600 mb-4">Price: ${book.price}</p>
            <p className="text-2xl text-gray-600 mb-4">
              Number of Pages: {book.numPages}
            </p>
            <p className="text-2xl text-gray-600 mb-4">
              Weight: {book.weight} lbs
            </p>
            <p className="text-xl text-gray-700 mb-8">{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
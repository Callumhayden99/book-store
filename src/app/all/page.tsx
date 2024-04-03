"use client"
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function ALL() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <h1>All Books</h1>
      <div>
        {books.map((book) => (
          <div key={book.id} className="bg-white shadow-md p-4 mb-4">
            <h2 className="text-2xl font-bold mb-2">{book.name}</h2>
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
            <p className="text-gray-600 mb-4">{book.description}</p>
            <img src={book.image} alt={book.name} className="w-48 h-auto" />
          </div>
        ))}
      </div>
    </>
  );
}